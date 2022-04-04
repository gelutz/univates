CREATE DATABASE tododb;
\c tododb

CREATE TABLE IF NOT EXISTS tasks (
    id int primary key,
    title varchar(100) NOT NULL,
    description text,
    due_date TIMESTAMP WITH TIME ZONE,
    done BOOLEAN,
    created_at DATE,
    deleted_at DATE,
    completed_at DATE
);