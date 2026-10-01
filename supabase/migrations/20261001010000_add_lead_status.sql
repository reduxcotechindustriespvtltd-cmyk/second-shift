-- Lead status tracking for the admin dashboard.
alter table public.leads
  add column if not exists status text not null default 'new'
    check (status in ('new', 'contacted', 'converted', 'lost'));

create index if not exists leads_status_idx on public.leads (status);

-- Admins can update lead status from the dashboard.
create policy "authenticated can update leads"
  on public.leads
  for update
  to authenticated
  using (true)
  with check (true);
