'use strict';
const levelsSchema = require('../schemas/levelsSchema');

const levels_list_get = async (req, res) => {
    try {
        const levels = await levelsSchema.find();
        res.json(levels);
    } catch (e) {
        console.error('levels_list_get', e);
        res.status(500).json({message: e.message});
    }
};

const levels_get = async (req, res) => {
    try {
        const levels = await levelsSchema.findById(req.params.id);
        res.json(levels);
    } catch (e) {
        console.error('levels_get', e);
        res.status(500).json({message: e.message});
    }
};

const levels_post = (req, res) => {
    res.send('With this endpoint you can add levelss');
};

module.exports = {
    levels_list_get,
    levels_get,
    levels_post,
};