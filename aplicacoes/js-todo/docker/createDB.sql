CREATE DATABASE aplicacoes;



CREATE TABLE IF NOT EXISTS contatos (
    id int primary key,
    name varchar(100) NOT NULL,
    phone varchar(11)
)

