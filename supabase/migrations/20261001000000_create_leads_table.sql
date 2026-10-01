-- Leads table: stores submissions from the public contact / plan-your-event form.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  phone text not null,
  interest text not null,
  team_size text,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

-- Public website visitors can submit leads, but can never read them back.
create policy "anon can insert leads"
  on public.leads
  for insert
  to anon
  with check (true);

-- Only signed-in admin users (via Supabase Auth) can read/manage leads.
create policy "authenticated can select leads"
  on public.leads
  for select
  to authenticated
  using (true);

create policy "authenticated can delete leads"
  on public.leads
  for delete
  to authenticated
  using (true);
