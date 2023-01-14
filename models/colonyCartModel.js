const registerWrapper = require("./process_register.js");
const guideWrapper = require("./process_guide.js");

module.exports = 
class colonyCartModel{

    async getBasicInfo(index){
        const requestRegisterResult = await registerWrapper
            .Process.findOne({where: {Id: index}});

        const requestGuideResult = await guideWrapper
            .Guide.findOne({where: {Id: requestRegisterResult.processGuideId }});

        return ({
            Id:         requestRegisterResult.Id,
            ColoniesId: requestRegisterResult.ColoniesId,
            Stage:      requestGuideResult.Title
        });
              
    };

};