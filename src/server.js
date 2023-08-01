const express = require("express")
const path = require("path")
const hbs = require("express-handlebars")
const morgan = require("morgan")
const methodOverride = require("method-override")
const flash = require("connect-flash")
const session = require("express-session")
const indexRoutes = require("./routes/index.route")
const notesRoutes = require("./routes/notes.route")

/* Initializations */
const app = express()

/* Settings */
app.set("port", process.env.PORT || 3000)
app.set("views", path.join(__dirname + "/views"))
app.engine(".hbs", hbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    },
}))
app.set("view engine", ".hbs")

/* Middlewares */
app.use(morgan())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(session({
    secret: 'el_gato_no_duerme_en_la_noche',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

/* Global Variables */
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    next()
})

/* Routes */
app.use(indexRoutes)
app.use(notesRoutes)

/* Statics */
app.use(express.static(path.join(__dirname + "/public")))

module.exports = app