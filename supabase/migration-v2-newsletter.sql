create table if not exists public.newsletter_subscribers (
 id uuid primary key default gen_random_uuid(),
 name text,
 email text not null unique,
 status text not null default 'active' check (status in ('active','unsubscribed')),
 source text not null default 'site',
 created_at timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

drop policy if exists "newsletter_public_insert" on public.newsletter_subscribers;
create policy "newsletter_public_insert" on public.newsletter_subscribers for insert to anon, authenticated with check (true);

drop policy if exists "newsletter_admin_select" on public.newsletter_subscribers;
create policy "newsletter_admin_select" on public.newsletter_subscribers for select to authenticated using (auth.uid() is not null);
