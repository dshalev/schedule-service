var mongoose = require('mongoose');
var ScheduleEventSchema = new mongoose.Schema({
    roomId: String,
    eventType: String,
    isOn: Boolean,
    temperature: Number,
    scheduled_at: Date,
    updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('ScheduleEvent', ScheduleEventSchema);
