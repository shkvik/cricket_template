
exports.index = function (request, response){

    response.render("../views/rearingView.hbs", 
    {
        Title: 'dashboard.Title',
    });
};