const registerWrapper = require("../models/process_register.js");
const colonyCartModel = require("../models/colonyCartModel.js");


exports.getCart = async function(request, response)
{
    // @ when debug
    console.log(`${request.params.id}`);

    var basicInfoResult = await new colonyCartModel().getBasicInfo(request.params.id);
    // Потом добавить страницу ошибки
    response.render("../views/colonyCartView.hbs",
    {
        basicInfo: basicInfoResult,
    });
};
