var mongoose = require('mongoose');
var ScheduleEventSchema = new mongoose.Schema({
    roomId: String,
    eventType: String,
    isOn: Boolean,
    temperature: Number,
    updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('ScheduleEvent', ScheduleEventSchema);
