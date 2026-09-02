-- Painel Vital V3 — estrutura administrativa inspirada no V2.
-- Execute no SQL Editor do Supabase se estas tabelas/policies ainda não existirem.
create table if not exists public.posts(id uuid primary key default gen_random_uuid(),slug text unique not null,title text not null,excerpt text,content text not null,category text,cover_url text,published boolean not null default false,created_at timestamptz not null default now());
create table if not exists public.testimonials(id uuid primary key default gen_random_uuid(),image_url text,name text not null,city text,text text not null,created_at timestamptz not null default now());
create table if not exists public.before_after(id uuid primary key default gen_random_uuid(),before_url text,after_url text,procedure text not null,published boolean not null default false,created_at timestamptz not null default now(),image_url text);
alter table public.before_after alter column before_url drop not null;
alter table public.before_after alter column after_url drop not null;
alter table public.site_settings add column if not exists not_found_image_url text;
alter table public.posts enable row level security; alter table public.testimonials enable row level security; alter table public.before_after enable row level security;
drop policy if exists "Leitura publica de posts publicados" on public.posts; create policy "Leitura publica de posts publicados" on public.posts for select to anon using(published=true);
drop policy if exists "Leitura autenticada de posts" on public.posts; create policy "Leitura autenticada de posts" on public.posts for select to authenticated using(true);
drop policy if exists "Insert autenticado em posts" on public.posts; create policy "Insert autenticado em posts" on public.posts for insert to authenticated with check(true);
drop policy if exists "Delete autenticado em posts" on public.posts; create policy "Delete autenticado em posts" on public.posts for delete to authenticated using(true);
drop policy if exists "Leitura publica de depoimentos" on public.testimonials; create policy "Leitura publica de depoimentos" on public.testimonials for select to anon using(true);
drop policy if exists "Insert autenticado em depoimentos" on public.testimonials; create policy "Insert autenticado em depoimentos" on public.testimonials for insert to authenticated with check(true);
drop policy if exists "Delete autenticado em depoimentos" on public.testimonials; create policy "Delete autenticado em depoimentos" on public.testimonials for delete to authenticated using(true);
drop policy if exists "Leitura publica de antes-depois publicados" on public.before_after; create policy "Leitura publica de antes-depois publicados" on public.before_after for select to anon using(published=true);
drop policy if exists "Leitura autenticada de antes-depois" on public.before_after; create policy "Leitura autenticada de antes-depois" on public.before_after for select to authenticated using(true);
drop policy if exists "Insert autenticado em antes-depois" on public.before_after; create policy "Insert autenticado em antes-depois" on public.before_after for insert to authenticated with check(true);
drop policy if exists "Delete autenticado em antes-depois" on public.before_after; create policy "Delete autenticado em antes-depois" on public.before_after for delete to authenticated using(true);
insert into storage.buckets(id,name,public) values ('blog-covers','blog-covers',true),('testimonials','testimonials',true),('before-after','before-after',true) on conflict(id) do update set public=true;
