const express = require("express");
const router = express.Router();

// Rotas básicas
router.get("/tasks", (req, res) => {
  res.json({ message: "Listar tarefas" });
});

router.post("/tasks", (req, res) => {
  res.json({ message: "Criar nova tarefa" });
});

router.put("/tasks/:id", (req, res) => {
  res.json({ message: `Atualizar tarefa ${req.params.id}` });
});

router.delete("/tasks/:id", (req, res) => {
  res.json({ message: `Excluir tarefa ${req.params.id}` });
});

module.exports = router;
