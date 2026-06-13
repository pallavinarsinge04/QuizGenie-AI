const Flashcard = require("../models/Flashcard");

exports.create = async (req, res) => {
  const data = await Flashcard.create({
    userId: req.user,
    ...req.body,
  });
  res.json(data);
};

exports.getAll = async (req, res) => {
  const data = await Flashcard.find({ userId: req.user });
  res.json(data);
};

exports.update = async (req, res) => {
  const data = await Flashcard.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(data);
};

exports.remove = async (req, res) => {
  await Flashcard.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};