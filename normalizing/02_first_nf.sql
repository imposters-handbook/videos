--1 NF: Values in cells must be atomic
drop table if exists rental_first_nf;
with source as (
	select *,
	trim(regexp_split_to_table(items, E',')) as item
	from rental_import
), fixed as (
	select customer, email, rental_number, total::money, rental_date::date,
	split_part(item, ';',1) as title,
	split_part(item, ';',2) as rating,
	split_part(item, ';',3)::money as fee
	from source
)
select * into rental_first_nf from fixed;
