import { db } from '@/config/firebase-admin'
import { IBook } from '@/services/book'
import { getErrorMessage } from '@/util/api/error'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  try {
    const page = Number(searchParams.get('page')) || 1
    const per = Number(searchParams.get('per')) || 10
    const offset = (page - 1) * per

    const snapshot = await db
      .collection('book')
      .orderBy('createdAt')
      .offset(offset)
      .limit(per)
      .get()

    const bestSellers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    const nextCursor = bestSellers.length === per ? page + 1 : undefined

    return NextResponse.json(
      {
        data: bestSellers,
        nextCursor
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching best sellers:', error)
    return NextResponse.json(
      { error: 'Failed to fetch best sellers' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { image, title, author, pbcmName, description }: IBook =
      await request.json()

    await db.collection('book').add({
      image,
      title,
      author,
      pbcmName,
      description,
      createdAt: new Date()
    })

    return NextResponse.json({ message: '책 등록 성공' }, { status: 200 })
  } catch (error) {
    console.error('책 등록 실패:', getErrorMessage(error))
    return NextResponse.json(
      { message: '책 등록 실패', error: getErrorMessage(error) },
      { status: 500 }
    )
  }
}
