'use strict';
const stationSchema = require('../schemas/stationSchema');

const station_get_all = async (req, res) => {
    try {
        const stations = await stationSchema.find().populate({
            path: "Connections",
            populate: [
                {path: "ConnectionTypeID"},
                {path: "LevelID"},
                {path: "CurrentTypeID"}
            ]
        });
        res.json(stations);
    } catch (e) {
        console.error('station_get_all', e);
        res.status(500).json({message: e.message});
    }
};

const station_get_by_id = async (req, res) => {
    try {
        const station = await stationSchema.findById(req.params.id).populate({
            path: "Connections",
            populate: [
                {path: "ConnectionTypeID"},
                {path: "LevelID"},
                {path: "CurrentTypeID"}
            ]
        });
        res.json(station);
    } catch (e) {
        console.error('station_get_by_id', e);
        res.status(500).json({message: e.message});
    }
};

module.exports = {
    station_get_all,
    station_get_by_id,
};