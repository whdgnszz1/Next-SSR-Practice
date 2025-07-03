import { db } from '@/config/firebase-admin'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  try {
    const q = searchParams.get('query') || ''

    const page = Number(searchParams.get('page')) || 1
    const per = 3
    const offset = (page - 1) * per

    let searchResults: any[] = []

    if (q) {
      // 모든 문서를 가져와서 클라이언트에서 필터링
      // 운영 환경에서는 Algolia나 Elasticsearch 사용 권장
      const allBooksQuery = db
        .collection('book')
        .orderBy('createdAt', 'desc')
        .limit(100) // 성능을 위해 제한

      const snapshot = await allBooksQuery.get()
      
      const allBooks = snapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data()
      }))

      // 클라이언트 사이드에서 검색 필터링
      const filteredBooks = allBooks.filter((book: any) => {
        const searchTerm = q.toLowerCase()
        return (
          book.title?.toLowerCase().includes(searchTerm) ||
          book.author?.toLowerCase().includes(searchTerm) ||
          book.pbcmName?.toLowerCase().includes(searchTerm) ||
          book.description?.toLowerCase().includes(searchTerm)
        )
      })

      // 페이지네이션 적용
      const startIndex = offset
      const endIndex = startIndex + per
      searchResults = filteredBooks.slice(startIndex, endIndex)
    }

    const nextCursor = searchResults.length === per ? page + 1 : undefined

    return NextResponse.json(
      {
        data: searchResults,
        nextCursor
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching search results:', error)
    return NextResponse.json(
      { error: 'Failed to fetch search results' },
      { status: 500 }
    )
  }
}
