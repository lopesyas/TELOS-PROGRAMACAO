
CREATE OR REPLACE PROCEDURE registrar_devolucao(
    p_loan_id INTEGER
)
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN

    IF EXISTS (
        SELECT 1
        FROM loans
        WHERE loan_id = p_loan_id
          AND return_date IS NULL
    ) THEN

        UPDATE loans
        SET return_date = CURRENT_DATE
        WHERE loan_id = p_loan_id;

        UPDATE books
        SET status = 'DISPONÍVEL'
        WHERE id_book = (
            SELECT book_id
            FROM loans
            WHERE loan_id = p_loan_id
        );

    ELSE
        RAISE EXCEPTION 'Este empréstimo já foi devolvido ou não existe.';
    END IF;

END;
$$;
CALL registrar_devolucao(2);
CALL registrar_devolucao(3);

