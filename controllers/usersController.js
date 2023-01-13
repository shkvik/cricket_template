exports.index = function (request, response){

    response.render("../views/usersView.hbs", 
    {
        Title: 'dashboard.Title',
    });
};