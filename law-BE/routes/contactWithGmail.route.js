const Route = require("express").Router();
const { tryCatch } = require("../midlewares/errorHandle");
const controller = require("../controllers/contactWithGmail.controller");
const { requireLogin } = require("../midlewares/auth");

Route.post("/", tryCatch(controller.addNewContactWithGmail));

module.exports = Route;
