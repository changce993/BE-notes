const controller = {}

controller.home = (req, res) => {
  res.render("index")
}

controller.about = (req, res) => {
  res.render("about")
}

module.exports = controller