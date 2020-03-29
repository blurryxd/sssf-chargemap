'use strict';
const connectionTypesSchema = require('../schemas/connectionTypes');

const connectionTypes_list_get = async (req, res) => {
    try {
        const connectionTypes = await connectionTypesSchema.find().populate('ConnectionTypes');
        res.json(connectionTypes);
    } catch (e) {
        console.error('connectionTypes_list_get', e);
        res.status(500).json({message: e.message});
    }
};

const connectionTypes_get = async (req, res) => {
    try {
        const connectionTypes = await connectionTypesSchema.findById(req.params.id);
        res.json(connectionTypes);
    } catch (e) {
        console.error('connectionTypes_get', e);
        res.status(500).json({message: e.message});
    }
};

const connectionTypes_post = (req, res) => {
    res.send('With this endpoint you can add connectionTypes');
};

module.exports = {
    connectionTypes_list_get,
    connectionTypes_get,
    connectionTypes_post,
};