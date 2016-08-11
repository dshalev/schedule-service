var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ScheduleEvent = require('../models/ScheduleEvent.js');

/* GET /schedule listing. */
router.get('/', function(req, res, next) {
    ScheduleEvent.find(function (err, schedule) {
        if (err) return next(err);
        res.json(schedule);
    });
});

/* GET /schedule/id */
router.get('/:id', function(req, res, next) {
    ScheduleEvent.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* POST /schedule */
router.post('/', function(req, res, next) {
    ScheduleEvent.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /schedule/:id */
router.put('/:id', function(req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /schedule/:id */
router.delete('/:id', function(req, res, next) {
    Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
