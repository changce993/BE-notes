const { Router } = require("express")
const router = Router()
const controller = require("../controllers/notes.controller")

router.get("/notes/add", controller.addNoteForm)
router.post("/notes/new-note", controller.createNote)

router.get("/notes", controller.notes)

router.get("/notes/edit/:id", controller.editNoteForm)
router.put("/notes/edit/:id", controller.editNote)

router.delete("/notes/delete/:id", controller.deleteNote)

module.exports = router