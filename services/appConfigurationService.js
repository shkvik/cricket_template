exports.installRouters = function (application)
{
    application.use("/production",   require("../routes/productionRouter.js"));
    application.use("/reproduction", require("../routes/reproductionRouter.js"));
    application.use('/colonyCart',   require("../routes/colonyCartRouter.js"));
    application.use("/nursery",      require("../routes/nurseryRouter.js"));
    application.use("/rearing",      require("../routes/rearingRouter.js"));
    application.use("/dashboard",    require("../routes/dashboardRouter.js"));
    application.use("/users",        require("../routes/usersRouter.js"));
    application.use("/settings",     require("../routes/settingsRouter.js"));
    application.use("/",             require("../routes/dashboardRouter.js"));
};