const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 8080;
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Live on http://localhost:${PORT}`);
});
