import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(_: NextRequest) {
  return NextResponse.json({ message: 'Hello from App Router API!' })
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  return NextResponse.json({ received: data })
}
