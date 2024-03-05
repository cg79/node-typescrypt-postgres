CREATE ROLE claudiu superuser;

CREATE USER claudiu;

GRANT ROOT TO claudiu;

ALTER ROLE claudiu WITH LOGIN;

CREATE TABLE employees (
	first_name varchar(25),
	last_name varchar(25),
	department varchar(15),
	email varchar(50)
);