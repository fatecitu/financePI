create table categorias(
    id uuid primary key default gen_random_uuid(),
    descricao varchar(100) not null unique,
    tipo char(7) not null check(tipo in ('receita','despesa'))
); --UUID = Universally unique identifier
--habilitar segurança por linha no supabase
alter table categorias enable row level security;
--política de leitura
create policy "permitir leitura das categorias" on categorias for select using (true);