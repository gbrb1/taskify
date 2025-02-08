# Taskify

**Taskify** é uma aplicação simples e intuitiva para gerenciar tarefas, desenvolvida com foco em aprendizado e boas práticas de desenvolvimento full-stack. A aplicação permite criar, editar, excluir e listar tarefas, com um front-end em **React.js** e um back-end em **Node.js**, utilizando **PostgreSQL** como banco de dados.

---

## 🛠️ Funcionalidades

- **Adicionar Tarefas:** Crie novas tarefas com facilidade.
- **Listar Tarefas:** Visualize todas as tarefas registradas.
- **Atualizar Tarefas:** Edite o título ou o status (concluído/pendente) das tarefas.
- **Excluir Tarefas:** Remova tarefas que não são mais necessárias.
- **Status:** Marque tarefas como concluídas ou pendentes.

---

## 🚀 Tecnologias Utilizadas

### **Front-End**
- React.js
- Axios (para chamadas à API)

### **Back-End**
- Node.js
- Express.js
- Sequelize (ORM)
- PostgreSQL

### **Extras**
- Swagger (documentação da API)
- Jest + Supertest (testes unitários e de integração)

---

## 📁 Estrutura do Projeto

```plaintext
frontend/
  ├── src/
      ├── components/    # Componentes React
      ├── services/      # Integração com a API
      ├── styles/        # Estilos CSS
      └── App.js         # Componente principal
backend/
  ├── controllers/       # Lógica dos endpoints
  ├── models/            # Modelos do banco de dados
  ├── routes/            # Rotas da API
  ├── services/          # Regras de negócio
  ├── config/            # Configuração do banco de dados
  └── app.js             # Configuração principal do servidor
