import { auth } from '@/config/firebase'
import { adminAuth, db } from '@/config/firebase-admin'
import { ILoginResponseDto } from '@/services/auth'
import { IApiJson } from '@/shared'
import { getErrorMessage } from '@/util/api/error'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json<IApiJson<null>>(
        {
          data: null,
          resultCode: '400',
          statusCode: 400,
          resultMessage: '이메일 또는 비밀번호가 제공되지 않았습니다.',
          detailMessage: null
        },
        { status: 400 }
      )
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const idToken = await userCredential.user.getIdToken()

    const decodedToken = await adminAuth.verifyIdToken(idToken)
    const user = await adminAuth.getUser(decodedToken.uid)

    const userDoc = await db.collection('users').doc(user.uid).get()
    const userData = userDoc.data()

    if (!userData) {
      return NextResponse.json<IApiJson<null>>(
        {
          data: null,
          resultCode: '404',
          statusCode: 404,
          resultMessage: '사용자 데이터가 존재하지 않습니다.',
          detailMessage: null
        },
        { status: 404 }
      )
    }

    const responsePayload: ILoginResponseDto = {
      token_type: 'access',
      accessToken: idToken,
      user: {
        email: user.email || '',
        name: userData.name || ''
      }
    }

    return NextResponse.json<IApiJson<ILoginResponseDto>>({
      data: responsePayload,
      resultCode: '200',
      statusCode: 200,
      resultMessage: '로그인 성공',
      detailMessage: null
    })
  } catch (error: unknown) {
    const errorMessage = getErrorMessage(error)
    console.error('로그인 실패:', errorMessage)

    return NextResponse.json<IApiJson<null>>(
      {
        data: null,
        resultCode: '401',
        statusCode: 401,
        resultMessage: '로그인 실패',
        detailMessage: errorMessage
      },
      { status: 401 }
    )
  }
}
