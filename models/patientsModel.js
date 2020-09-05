const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    nome: {
        type: String,
        required: [true, '*Campo obrigatório!']
    },
    idade: {
        type: Number
    },
    peso: {
        type: Number
    },
    altura: {
        type: Number
    },
    status: {
        type: Boolean,
        default: true
    }
});
const PS = mongoose.model('patients', patientSchema);
module.exports = PS;