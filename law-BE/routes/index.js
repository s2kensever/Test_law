const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const luatSuRoute = require("./luatSu.route");
const contactWithGmail = require("./contactWithGmail.route");
const route = (app) => {
    app.use("/api/user", userRoute);
    app.use("/api/auth", authRoute);
    app.use("/api/luatSu", luatSuRoute);
    app.use("/api/contactWithGmail",contactWithGmail);
};

module.exports = route;
