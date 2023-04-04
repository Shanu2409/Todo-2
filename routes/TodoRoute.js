const Router = require("express");
const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
  getOneTodo,
} = require("../controllers/TodoController");

const router = Router();

router.get("/", getTodo);

router.get("/find/:id", getOneTodo);

router.post("/save", saveTodo);

router.put("/update/:id", updateTodo);

router.delete("/delete/:id", deleteTodo);

module.exports = router;
