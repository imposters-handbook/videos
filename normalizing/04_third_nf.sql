--3 NF: Non-keys describe the primary key and nothing else
alter table customers drop column if exists id;
alter table films drop column if exists id;
alter table rentals drop column if exists id;
alter table rentals drop column if exists customer_id;
alter table rentals drop column if exists film_id;

alter table customers add column id serial primary key not null;
alter table films add column id serial primary key not null;
alter table rentals add column id serial primary key not null;
alter table rentals add column customer_id int;
alter table rentals add column film_id int;
