const registerWrapper = require("../models/process_register.js");
const guideWrapper = require("../models/process_guide.js");


exports._getBasicInfo = async function(index)
{
    if(!Number.isInteger(parseInt(index))) 
        throw new Error("exception: index is not integer");
    
    const requestRegisterResult = await registerWrapper
        .Process.findOne({where: {ColoniesId: index}});

    const requestGuideResult = await guideWrapper
        .Guide.findOne({where: {Id: requestRegisterResult.processGuideId}});

    if(!requestRegisterResult)
        throw new Error("exception: this colony does not exist");

    return ({
        Id:         requestRegisterResult.Id,
        ColoniesId: requestRegisterResult.ColoniesId,
        ColonyDate: Math.round((new Date() - requestRegisterResult.StartData) / (1000 * 60 * 60 * 24)),
        Stage:      requestGuideResult.Title
    });
};
