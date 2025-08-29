import express from "express";
import toDo from "../models/toDoModel.js";

const router = express.Router();

// create a new todo
router.post("/", async (request, result) => {
  try {
    if (!request.body.title) {
      return result.status(400).send({
        message: "send all rq fields: title",
      });
    }
    const newToDo = {
      title: request.body.title,
    };

    const todo = await toDo.create(newToDo);
    return result.status(201).send(todo);
  } catch (error) {
    console.log(error.message);
    reportError.status(500).send({
      message: error.message,
    });
  }
});

// get all todos
router.get("/", async (request, result) => {
  try {
    const todo = await toDo.find();
    return result.status(200).json({
      data: todo,
    });
  } catch (error) {
    console.log(error.message);
    result.status(500).send({
      message: error.message,
    });
  }
});

// delete a todo
router.delete("/:id", async (request, result) => {
  try {
    const { id } = request.params;
    const todo = await toDo.findByIdAndDelete(id);
    if (!todo) {
      return result.status(404).json({ message: "ToDo not found" });
    }
    return result.status(200).send({
      message: "Successfully deleted ToDo",
    });
  } catch (error) {
    console.log(error.message);
    result.status(500).send({
      message: error.message,
    });
  }
});

// update a todo
router.put("/:id", async (request, result) => {
  try {
    const { id } = request.params;

    if (!request.body.title) {
      return response
        .status(400)
        .json({ message: "You need to include request field: title" });
    }

    const updatedToDo = await toDo.findByIdAndUpdate(
      id,
      { title: request.body.title },
      { new: true }
    );

    if (!updatedToDo) {
      return response.status(404).json({ message: "todo not found" });
    }

    return response.status(200).json(updatedToDo);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

export default router;
