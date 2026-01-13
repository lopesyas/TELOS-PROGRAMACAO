CREATE OR REPLACE PROCEDURE registrar_emprestimo(
    p_book_id INTEGER,
    p_user_id INTEGER
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Verifica se o livro está disponível usando a function
    IF verificar_disponibilidade_livro(p_book_id) = 1 THEN
        
        -- Registra o empréstimo na tabela loans
        INSERT INTO loans (
            book_id,
            user_id,
            loan_date
        )
        VALUES (
            p_book_id,
            p_user_id,
            CURRENT_DATE
        );

        -- Atualiza o status do livro para EMPRESTADO
        UPDATE books
        SET status = 'EMPRESTADO'
        WHERE id_book = p_book_id;

    ELSE
        -- Caso o livro já esteja emprestado
        RAISE EXCEPTION 'Livro não disponível para empréstimo';
    END IF;
END;
$$;

SELECT * FROM books WHERE id_book = 2;
SELECT * FROM users WHERE id_user = 1;


CALL registrar_emprestimo(2, 1);
CALL registrar_emprestimo(3, 3);
CALL registrar_emprestimo(5, 1);

-- Ver o livro
SELECT * 
FROM books 
WHERE id_book = 3;

-- Ver o usuário
SELECT * 
FROM users 
WHERE id_user = 3;

select * from books;


