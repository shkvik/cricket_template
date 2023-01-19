const colonyCartService = require("../services/colonyCartService.js");


class colonyCartModel
{
    async getBasicInfo(index)
    {
        try { return await colonyCartService._getBasicInfo(index); }
        catch(err){ console.log(`${err.message}`); return null; }
    };
};

module.exports = colonyCartModel;

