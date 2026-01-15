CREATE OR REPLACE FUNCTION verificar_disponibilidade_livro(
    book_id_parametro INTEGER
)
RETURNS INTEGER
AS $$
DECLARE
    status_livro VARCHAR(20);
BEGIN
    SELECT status
    INTO status_livro
    FROM books
    WHERE id_book = book_id_parametro;

    IF status_livro = 'DISPONÍVEL' THEN
        RETURN 1;
    ELSE
        RETURN 0;
    END IF;
END;
$$ LANGUAGE plpgsql;

SELECT verificar_disponibilidade_livro(2);
