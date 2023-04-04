const TodoModel = require("../models/TodoModel");

module.exports.getTodo = async (req, res) => {
  const todo = await TodoModel.find();
  res.send(todo);
};

module.exports.getOneTodo = async (req, res) => {
  const todo = await TodoModel.findById(req.params.id);

  res.json(todo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;
  TodoModel.create({ text }).then((data) => {
    console.log("data created successfuly");
    res.json(data);
  });
};

module.exports.updateTodo = async (req, res) => {
  const { text } = req.body;
  const todo = await TodoModel.findByIdAndUpdate(
    req.params.id,
    { text },
    { new: true }
  );

  res.json(todo);
};

module.exports.deleteTodo = async (req, res) => {
  // const { _id } = req.body;
  // TodoModel.findByIdAndDelete(_id)
  //   .then(() => res.send("deleted successfuly"))
  //   .catch((e) => console.log(e));

  const result = await TodoModel.findByIdAndDelete(req.params.id);

  res.json(result);
};
