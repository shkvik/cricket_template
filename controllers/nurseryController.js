
exports.index = function (request, response)
{
    response.render("../views/nurseryView.hbs", 
    {
        Title: 'dashboard.Title',
    });
};

exports.addColony = function(request, response)
{
    console.log(
    {
        parent_colony: request.body.parent_colony,
        number_of_bins: request.body.number_of_bins,
        egg_density: request.body.egg_density,
        location: request.body.location
    });
    
    response.redirect("/nursery"); 
};