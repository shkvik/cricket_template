
exports.index = function (request, response){

    response.render("../views/reproductionView.hbs", 
    {
        Title: 'dashboard.Title',
    });
};