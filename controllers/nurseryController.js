
exports.index = async function (request, response)
{
    console.log(request.query.inc_box_table_page);
    response.render("../views/nersery/nurseryIndexView.hbs", 
    {
        Title: 'dashboard.Title',
    });
};

exports.add_neonates_trays = async function(request, response)
{
    console.log(
    {
        parent_colony: request.body.ncubation_box_id,
        number_of_bins: request.body.colony_id,
    });
    response.redirect("/nursery"); 
};

exports.add_incubation_box = async function(request, response)
{
    console.log(
    {
        parent_colony: request.body.fly_cage_id,
        number_of_bins: request.body.weight_of_eggs,
    });
    
    response.redirect("/nursery"); 
};

exports.get_cart_incubation_box = async function(request, response)
{
    response.render('../views/nersery/nurseryIncubationBoxCartView.hbs');
};