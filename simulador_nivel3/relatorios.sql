-- RELATÓRIO 1: LIVROS EMPRESTADOS E DEVOLVIDOS

select 
	books.title as title,
	users.name as user,
	loans.loan_date,
	loans.return_date,
	books.status as book_status
from loans
join books on books.id_book = loans.book_id
join users on users.id_user = loans.user_id;

-- RELATÓRIO 2: LIVROS ATUALMENTE EMPRESTADOS

select 
	books.title as title,
	users.name as user,
	loans.loan_date,
	loans.return_date,
	books.status
from loans
join books on books.id_book = loans.book_id
join users on users.id_user = loans.user_id
where books.status = 'EMPRESTADO'
	and return_date is null;

-- RELATÓRIO 3: USUÁRIOS COM MAIS EMPRÉSTIMOS

SELECT user_id
FROM loans;

select
	users.name,
	COUNT(loans.loan_id) as total_loans
from users 
join loans on loans.user_id = users.id_user
group by users.name
order by total_loans desc;

