const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const path = require("node:path");

const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const IMAGE_DIR = path.join(process.cwd(), "public", "avatars");

app.use("./publice/avatars", express.static(IMAGE_DIR));

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter); 

app.use((request, response) => {
  response.status(404).json({ message: "Not found" });
});

app.use((error, request, response) => {
  response.status(500).json({ message: error.message });
});

module.exports = app;