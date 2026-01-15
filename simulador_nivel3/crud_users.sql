
-- busca todos os users
select * from users;

-- buscar user por nome
select *
from users
where name = 'Ana Silva';

-- buscar user por email
select *
from users
where email = 'lopesyas@email.com';

-- atualizar nome do user
update users
set name = 'Yasmin Lopes Mendes'
where id_user = 5;

-- atualizar email do user
update users 
set email = 'yasmin.lopes@email.com'
where id_user = 5;

-- Só excluir se não tiver empréstimos ativos
DELETE FROM users
WHERE id_user = 5
  AND NOT EXISTS (
      SELECT 1
      FROM loans
      WHERE loans.user_id = users.id_user
        AND return_date IS NULL
  );

