const express = require("express");
const router = express.Router();

const { createOne, updateOne, deleteOne, findAll } = require("./controller");

router.get("/getToDos", findAll);
router.post("/addToDo", createOne);
router.put("/updateTodo", updateOne);
router.delete("/deleteToDo", deleteOne);

module.exports = router;
