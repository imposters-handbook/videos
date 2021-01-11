update rentals set
customer_id = (select id from customers where email = rentals.email),
film_id = (select id from films where title = rentals.film_title);

alter table rentals
drop constraint if exists rental_customers;

alter table rentals
drop constraint if exists rental_films;

alter table rentals
add constraint rental_customers
foreign key (customer_id) references customers(id);

alter table rentals
add constraint rental_films
foreign key (film_id) references films(id);
