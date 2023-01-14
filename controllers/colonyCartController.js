const registerWrapper = require("../models/process_register.js");
const colonyCartModel = require("../models/colonyCartModel.js");


exports.getCart = async function(request, response)
{
    // @ when debug
    console.log(`${request.params.id}`);

    if(!Number.isInteger(parseInt(request.params.id))) {
        response.send("Не надо нам ваших SQL инъекций ;D");
        return;
    }

    var basicInfoResult = await new colonyCartModel().getBasicInfo(request.params.id);

    if(!basicInfoResult) {
        response.send("Такой колонии нет");
        return;
    }
    
    response.render("../views/colonyCartView.hbs",
    {
        basicInfo: basicInfoResult,
    });
};
