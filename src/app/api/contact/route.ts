import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function db() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, message } = body
  if (!name || !email || !message) return NextResponse.json({ error: 'All fields required' }, { status: 400 })
  const { error } = await db().from('messages').insert({ name, email, message })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
