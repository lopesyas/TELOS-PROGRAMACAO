# 📚 Simulador SQL – Sistema de Gerenciamento de Biblioteca (Nível 3)

Este projeto consiste no desenvolvimento de um **Sistema de Gerenciamento de Livros para a Biblioteca Télos**, utilizando **PostgreSQL**, com foco em modelagem de dados, regras de negócio no banco e boas práticas de versionamento com Git/GitHub.

O simulador foi desenvolvido como parte da avaliação do **Simulador Nível 3**, contemplando CRUD completo, uso de **functions**, **procedures**, **joins** e **relatórios SQL**.

---

## 🎯 Objetivo do Projeto

Criar um sistema capaz de:
- Gerenciar livros e usuários
- Controlar empréstimos e devoluções
- Garantir integridade dos dados através de constraints
- Centralizar regras de negócio no banco de dados
- Gerar relatórios utilizando JOIN, GROUP BY e funções agregadas

---

## 🗂️ Estrutura do Projeto

Os scripts estão organizados da seguinte forma:

simulador_nivel3/
├── tabelas_inserts.sql
├── function_verificar_disponibilidade.sql
├── procedure_registrar_emprestimo.sql
├── procedure_devolucao.sql
├── crud_books.sql
├── crud_users.sql
└── relatorios.sql


---

## 🧱 Modelagem do Banco de Dados

### 📘 Tabela `books`
- `id_book` (PK)
- `title`
- `author`
- `genre`
- `published_year`
- `status`  
  - Valores possíveis: `DISPONÍVEL` | `EMPRESTADO`
  - Valor padrão: `DISPONÍVEL`

### 👤 Tabela `users`
- `id_user` (PK)
- `name`
- `email` (único)

### 🔁 Tabela `loans`
- `loan_id` (PK)
- `book_id` (FK → books)
- `user_id` (FK → users)
- `loan_date`
- `return_date` (NULL enquanto o livro estiver emprestado)

---

## ⚙️ Function

### 🔹 `verificar_disponibilidade_livro`
Responsável por verificar se um livro está disponível para empréstimo.

**Retorno:**
- `1` → Livro disponível
- `0` → Livro emprestado

Essa function é utilizada dentro das procedures para garantir a regra de negócio.

---

## 🔧 Procedures

### 🔹 `registrar_emprestimo`
- Recebe `book_id` e `user_id`
- Verifica a disponibilidade do livro
- Registra o empréstimo na tabela `loans`
- Atualiza o status do livro para `EMPRESTADO`
- Retorna erro caso o livro não esteja disponível

### 🔹 `registrar_devolucao`
- Recebe `loan_id`
- Atualiza a `return_date`
- Atualiza o status do livro para `DISPONÍVEL`
- Só permite devolução se o empréstimo ainda não tiver sido finalizado

---

## 🟢 CRUD de Livros

Funcionalidades implementadas:
- Buscar todos os livros
- Buscar por título
- Buscar por autor
- Buscar por gênero
- Buscar por status
- Atualizar título, gênero e ano
- Excluir livro **apenas se estiver DISPONÍVEL**

---

## 👥 CRUD de Usuários

Funcionalidades implementadas:
- Buscar todos os usuários
- Buscar por nome
- Buscar por email
- Atualizar nome e email
- Excluir usuário **apenas se não possuir empréstimos ativos**

---

## 📊 Relatórios

### 🔹 Livros emprestados e devolvidos
- JOIN entre `books`, `loans` e `users`
- Exibe:
  - Título do livro
  - Nome do usuário
  - Data de empréstimo
  - Data de devolução
  - Status do livro

### 🔹 Livros atualmente emprestados
- JOIN entre as tabelas
- Filtro por:
  - `books.status = 'EMPRESTADO'`
  - `return_date IS NULL`

### 🔹 Usuários com mais empréstimos
- Uso de `COUNT`
- `GROUP BY`
- Ordenação decrescente pelo total de empréstimos

---

## 🧠 Boas Práticas Aplicadas

- Uso de constraints para integridade dos dados
- Regras de negócio centralizadas no banco
- Organização do código em scripts separados
- Uso de branches e Pull Request mesmo em projeto individual
- Versionamento seguindo fluxo profissional

---

## 🚀 Tecnologias Utilizadas

- PostgreSQL
- SQL (DDL, DML, Functions, Procedures)
- Git
- GitHub

---

## 👩‍💻 Autora

**Yasmin Lopes Mendes**  
Projeto desenvolvido para fins acadêmicos no Simulador Nível 3.
