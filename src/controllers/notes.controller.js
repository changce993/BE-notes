const Note = require("../models/Note")

const controller = {}

controller.addNoteForm = (req, res) => {
  res.render("notes/new-note")
}

controller.createNote = async (req, res) => {
  const { title, description } = req.body
  const newNote = new Note({ title, description })
  await newNote.save()
  req.flash("success_msg", "New note added successfully")

  res.redirect("/notes")
}

controller.notes = async (req, res) => {
  const notes = await Note.find({}).lean()
  res.render("notes/all-notes", { notes })
}

controller.editNoteForm = async (req, res) => {
  const { title, description, id } = await Note.findById(req.params.id)
  res.render("notes/edit-note", { title, description, id })
}

controller.editNote = async (req, res) => {
  const { title, description } = req.body
  await Note.findByIdAndUpdate(req.params.id, { title, description })
  req.flash("success_msg", "Note updated successfully")

  res.redirect("/notes")
}

controller.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  req.flash("success_msg", "Note deleted successfully")

  res.redirect("/notes")
}

module.exports = controller