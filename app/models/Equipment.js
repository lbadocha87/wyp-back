const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://staszek:g0Ye3zltqrEAcHCJ@cluster0.lihsftb.mongodb.net/app?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const conclusion = new mongoose.Schema({
    oderStan: {
        type: String,
        default: "Oczekujący",
    },

    firstName: {
        type: String,
        default: "",
    },

    lastName: {
        type: String,
        default: "",
    },

    phoneNumber: {
        type: String,
        default: "",
    },

    numberId: {
        type: String,
        default: "",
    },

    startDate: {
        type: String,
        deflaut: ""
    },

    endDate: {
        type: String,
        deflaut: ""
    },

}, {
    timestamps: true

});

const equipments = new mongoose.Schema({

    machineName: {
        type: String,
        default: ""
    },

    quanitity: {
        type: String,
        default: "",
    },

    photo: {
        type: String,
        default: ""
    },

    year: {
        type: String,
        default: ""
    },

    model: {
        type: String,
        default: ""
    },

    category: {
        type: String,
        default: ""
    },

    descripsion: {
        type: String,
        deflaut: ""
    },

    aplication: [conclusion]
});
module.exports = mongoose.model("Equipment", equipments);