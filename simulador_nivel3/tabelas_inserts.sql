CREATE DATABASE telos_simulador_3;

create table books(
	id_book SERIAL primary key,
	title VARCHAR(200) not null,
	author VARCHAR(200) not null,
	genre VARCHAR(30) not null,
	published_year INTEGER not null,
	status VARCHAR(20) not null default 'DISPONÍVEL',
		
	CONSTRAINT check_book_status
		check (status in('DISPONÍVEL', 'EMPRESTADO'))
);


create table users(
	id_user SERIAL primary key,
	name VARCHAR(100) not null,
	email VARCHAR(200) unique not null
);

CREATE TABLE loans (
    loan_id SERIAL PRIMARY KEY, 
    book_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    
    loan_date DATE NOT NULL DEFAULT CURRENT_DATE,
    return_date DATE,

    CONSTRAINT fk_loans_book
        FOREIGN KEY (book_id) REFERENCES books(id_book) ON DELETE RESTRICT,

    CONSTRAINT fk_loans_user
        FOREIGN KEY (user_id) REFERENCES users(id_user) ON DELETE RESTRICT
);

INSERT INTO books (title, author, genre, published_year) VALUES
('Dom Casmurro', 'Machado de Assis', 'Romance', 1899),
('1984', 'George Orwell', 'Distopia', 1949),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Fábula', 1943),
('Capitães da Areia', 'Jorge Amado', 'Romance', 1937),
('A Revolução dos Bichos', 'George Orwell', 'Sátira', 1945);

INSERT INTO users (name, email) VALUES
('Ana Silva', 'ana.silva@email.com'),
('Carlos Mendes', 'carlos.mendes@email.com'),
('Beatriz Rocha', 'beatriz.rocha@email.com');

INSERT INTO users (name, email) VALUES 
('Lucas Ferreira', 'lucas.ferreira@email.com'),
('Yasmin Lopes', 'lopesyas@email.com');



