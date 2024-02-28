const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventsSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        minlength: 5
    },

    tag:{
        type:String,
        default:"Public Help"
    },
    
    opportunity:{
     type:String,
     defualt:null
    },

    stipend: {
        type: Number,
        default: 0
    },
    
    startDate:{
       type:Date,
       default:null,
       required:true
    },
    endDate:{
        type:Date,
        default:null
     
    },
    entry_date: {
        type: Date,
        default: Date.now
    } 
});

const Events = mongoose.model('Events', EventsSchema);
module.exports = Events;
