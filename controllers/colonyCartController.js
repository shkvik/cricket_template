const registerWrapper = require("../models/process_register.js");
const colonyCartModel = require("../models/colonyCartModel.js");


exports.getCart = async function(request, response){
    console.log(`${request.params.id}`);

    var basicInfoResult = await new colonyCartModel().getBasicInfo(3);

    response.render("../views/colonyCartView.hbs",
    {
        basicInfo: basicInfoResult,
    });
};
