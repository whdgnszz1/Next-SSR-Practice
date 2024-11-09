import { db } from '@/config/firebase-admin'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  try {
    const q = searchParams.get('query') || ''

    const page = Number(searchParams.get('page')) || 1
    const per = 3
    const offset = (page - 1) * per

    let queries: any[] = []
    let searchResults: any[] = []

    if (q) {
      const titleQuery = db
        .collection('book')
        .where('title', '>=', q)
        .where('title', '<=', q + '\uf8ff')
        .orderBy('createdAt')
        .offset(offset)
        .limit(per)

      queries.push(titleQuery)

      const authorQuery = db
        .collection('book')
        .where('author', '>=', q)
        .where('author', '<=', q + '\uf8ff')
        .orderBy('createdAt')
        .offset(offset)
        .limit(per)

      queries.push(authorQuery)

      const pbcmNameQuery = db
        .collection('book')
        .where('pbcmName', '>=', q)
        .where('pbcmName', '<=', q + '\uf8ff')
        .orderBy('createdAt')
        .offset(offset)
        .limit(per)

      queries.push(pbcmNameQuery)

      const descriptionQuery = db
        .collection('book')
        .where('description', '>=', q)
        .where('description', '<=', q + '\uf8ff')
        .orderBy('createdAt')
        .offset(offset)
        .limit(per)

      queries.push(descriptionQuery)

      const snapshots = await Promise.all(queries.map((query) => query.get()))

      snapshots.forEach((snapshot) => {
        snapshot.docs.forEach((doc: any) => {
          if (!searchResults.find((item) => item.id === doc.id)) {
            searchResults.push({ id: doc.id, ...doc.data() })
          }
        })
      })
    }

    const paginatedResults = searchResults.slice(0, per)

    const nextCursor = paginatedResults.length === per ? page + 1 : undefined

    return NextResponse.json(
      {
        data: paginatedResults,
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
