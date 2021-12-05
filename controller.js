const ToDo = require("./ToDoModel");

exports.createOne = (req, res) => {
  ToDo.create(req.body)
    .then((todo) => {
      console.log({ todo });
      res.json({
        message: "Successfully added in ToDo list",
        response: todo,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Failed to add Todo",
        response: err,
      });
    });
};

exports.findAll = (req, res) => {
  ToDo.find()
    .then((todo) => {
      console.log({ todo });
      res.json({
        data: todo,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Failed to fetch Data",
        response: err,
      });
    });
};

exports.updateOne = (req, res) => {
  ToDo.findByIdAndUpdate(req.params.id, req.body)
    .then((todo) => {
      console.log({ todo });
      res.json({
        message: "Successfully added in ToDo list",
        response: todo,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Failed to add Todo",
        response: err,
      });
    });
};

exports.deleteOne = (req, res) => {
  ToDo.findByIdAndRemove()
    .then((todo) => {
      console.log({ todo });
      res.json({
        message: "ToDo removed successfully",
        data: todo,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Failed to delete Data",
        response: err,
      });
    });
};
