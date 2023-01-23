
exports.index = async function (request, response)
{
    response.render("../views/nurseryView.hbs", 
    {
        Title: 'dashboard.Title',
    });
};

exports.addNeonatesTrays = async function(request, response)
{
    console.log(
    {
        parent_colony: request.body.ncubation_box_id,
        number_of_bins: request.body.colony_id,
    });
    response.redirect("/nursery"); 
};

exports.addIncubationBox = async function(request, response)
{
    console.log(
    {
        parent_colony: request.body.fly_cage_id,
        number_of_bins: request.body.weight_of_eggs,
    });
    
    response.redirect("/nursery"); 
};
