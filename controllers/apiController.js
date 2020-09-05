const PS = require('../models/patientsModel');

exports.getAll = function (req, res) {
    PS.find({}).then(function (ps) {
        res.send(ps);
    });
};
exports.findId = function (req, res) {
    PS.findById({ _id: req.params.id }).then(function (ps) {
        res.send(ps);
    });
};
exports.create = function (req, res) {
    PS.create(req.body).then(function (ps) {
        res.send(ps);
    });
};
exports.update = function (req, res) {
    PS.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((patient) => {
            res.status(200).send(patient);
        })
        .catch((err) => {
            return res.status(404).send({
                message: "Id não encontrado...",
            });
        });
};
exports.delete = function (req, res, next) {
    PS.findByIdAndRemove({ _id: req.params.id }).then(function (ps) {
        res.send(ps);
    }).catch(next);
};
