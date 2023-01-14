const registerWrapper = require("./process_register.js");
const guideWrapper = require("./process_guide.js");

module.exports = 

class colonyCartModel
{
    async getBasicInfo(index)
    {
        try
        {
            const requestRegisterResult = await registerWrapper
                .Process.findOne({where: {ColoniesId: index}});

            const requestGuideResult = await guideWrapper
                .Guide.findOne({where: {Id: requestRegisterResult.processGuideId }});

            return ({
                Id:         requestRegisterResult.Id,
                ColoniesId: requestRegisterResult.ColoniesId,
                ColonyDate: Math.round((new Date() - requestRegisterResult.StartData) / (1000 * 60 * 60 * 24)),
                Stage:      requestGuideResult.Title
            });
        }
        catch(err)
        {
            console.log(`${err.message}`);
            return null;
        }
    };
};