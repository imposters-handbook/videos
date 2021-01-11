--2 NF: Must be in 1NF and each row must be identifiable by a unique value or set of values, aka a "primary key"
drop table if exists customers;
drop table if exists rentals;
drop table if exists films;
create table customers(
  email varchar(255),
  name varchar(255)
);
insert into customers(email, name)
select email, customer from rental_first_nf group by email, customer;
create table rentals(
  email varchar(255),
  film_title varchar(50),
  number varchar(50),
  date date,
  total money
);
insert into rentals(email, film_title, number, date, total)
select email, title, rental_number, rental_date, total
from rental_first_nf
group by email, title, rental_number, rental_date, total;
create table films(
  title varchar(50),
  rating varchar(50),
  fee money
);
insert into films(title, rating, fee)
select title, rating, fee from rental_first_nf group by title, rating, fee;
