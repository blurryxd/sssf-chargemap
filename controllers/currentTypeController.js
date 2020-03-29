'use strict';
const currentTypeSchema = require('../schemas/currentTypeSchema');

const currentType_list_get = async (req, res) => {
    try {
        const currentTypes = await currentTypeSchema.find();
        res.json(currentTypes);
    } catch (e) {
        console.error('currentType_list_get', e);
        res.status(500).json({message: e.message});
    }
};

const currentType_get = async (req, res) => {
    try {
        const currentType = await currentTypeSchema.findById(req.params.id);
        res.json(currentType);
    } catch (e) {
        console.error('currentType_get', e);
        res.status(500).json({message: e.message});
    }
};

const currentType_post = (req, res) => {
    res.send('With this endpoint you can add currentTypes');
};

module.exports = {
    currentType_list_get,
    currentType_get,
    currentType_post,
};