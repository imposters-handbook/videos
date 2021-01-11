--create the table and import the CSV file
drop table if exists rental_import;
create table rental_import(
  customer varchar(255),
  email varchar(255),
  rental_number varchar(50),
  total varchar(50),
  rental_date varchar(50),
  items text
);
COPY rental_import FROM
'[ABS PATH TO RENTALS CSV IN THIS DIR]'
DELIMITER ',' CSV;
