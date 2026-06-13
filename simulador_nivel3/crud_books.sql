-- buscar todos os livros
SELECT * FROM books;

-- buscar livro por título
SELECT * 
FROM books
WHERE title ILIKE '%Casmurro'; -- ILIKE busca sem diferenciar maiúscula/minúscula, % tudo que tiver antes ou depois

-- buscar livro por autor
SELECT *
FROM books
WHERE author ILIKE '%orwell%';

-- buscar livro por gênero
select * 
from books 
where genre ILIKE 'romance';

-- buscar livro por status
select *
from books
where status = 'DISPONÍVEL'

SELECT *
FROM books
WHERE status = 'EMPRESTADO';

-- atualizar gênero do livro
update books
set genre = 'clássico'
where id_book = 1; -- Dom Casmurro - antes era romance

-- atualizar título do livro
update books
set title = 'Dom Casmurro - Edição Atualizada'
where id_book = 1;

-- excluir livro APENAS se estiver DISPONÍVEL
DELETE FROM books
WHERE id_book = 5
  AND status = 'DISPONÍVEL';




