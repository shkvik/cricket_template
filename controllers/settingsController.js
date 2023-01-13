exports.index = function (request, response){

    response.render("../views/settingsView.hbs", 
    {
        Title: 'dashboard.Title',
    });
};