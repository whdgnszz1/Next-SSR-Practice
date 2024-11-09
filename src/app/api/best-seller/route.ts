import { db } from '@/config/firebase-admin'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const snapshot = await db.collection('book').orderBy('createdAt').get()

    let bestSellers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    bestSellers = bestSellers.sort(() => Math.random() - 0.5)

    return NextResponse.json(
      {
        data: bestSellers
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
