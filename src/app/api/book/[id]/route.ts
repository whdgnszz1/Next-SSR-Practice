import { db } from '@/config/firebase-admin'
import { NextRequest, NextResponse } from 'next/server'

interface IParams {
  params: { id: string }
}

export async function GET(request: NextRequest, { params }: IParams) {
  try {
    const { id: bookId } = params

    if (!bookId) {
      return NextResponse.json(
        { error: 'Book ID is required' },
        { status: 400 }
      )
    }

    const doc = await db.collection('book').doc(bookId).get()

    if (!doc.exists) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 })
    }

    const bookData = { id: doc.id, ...doc.data() }

    return NextResponse.json(bookData, { status: 200 })
  } catch (error) {
    console.error('Error fetching book:', error)
    return NextResponse.json({ error: 'Failed to fetch book' }, { status: 500 })
  }
}
