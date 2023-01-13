
exports.index = function (request, response){

    response.render("../views/nurseryView.hbs", 
    {
        Title: 'dashboard.Title',
    });
};