import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function db() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, interests } = body
  if (!name || !email) return NextResponse.json({ error: 'Name and email required' }, { status: 400 })
  const { error } = await db().from('volunteers').insert({ name, email, phone, interests })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
