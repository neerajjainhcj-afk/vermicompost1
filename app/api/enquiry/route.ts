import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  const body = await request.json()

  const { error } = await supabase
    .from('enquiries')
    .insert([body])

  if (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

