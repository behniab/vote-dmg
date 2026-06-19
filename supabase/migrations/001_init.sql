CREATE TABLE IF NOT EXISTS public.volunteers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  interests text[]
);

CREATE TABLE IF NOT EXISTS public.messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  replied boolean DEFAULT false
);

ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages   ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access volunteers" ON public.volunteers USING (true);
CREATE POLICY "Service role full access messages"   ON public.messages   USING (true);
