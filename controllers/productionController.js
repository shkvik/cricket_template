
exports.index = function (request, response){

    response.render("../views/productionView.hbs", 
    {
        Title: 'dashboard.Title',
    });
};