const Equipment = require("../models/Equipment");

function equipmentAdd(data, cb) {
    let newEquipment = new Equipment(data);
    newEquipment.save(function (err, equipment) {
        if (err) {
            cb(err)
        } else {
            cb(null, equipment)
        }
    })
};

function listEquipment(cb) {
    /*    let viewGroup = {}
      /*  let group ="Hydrauliczne" */

    /*  if (group) {
         viewGroup = { "category": group }
     } */

    Equipment.find().lean().exec(function (err, equipment) {
        if (err) {
            cb(err)
        } else {
            cb(null, equipment)
        }
    })
};

function equipmentOne(id, cb) {
    Equipment.findById(id).exec(function (err, equipment) {
        if (err) {
            cb(err)
        } else {
            cb(null, equipment)
        }
    })
};

function orderAdd(data, cb) {
    Equipment.updateOne(
        { _id: data[0] },
        { $push: { aplication: data[1] } },
        function (err, equipments) {
            if (err) {
                cb(err)
            } else {
                cb(null, equipments)
            }

        }
    )
};

function upodateEquipment(id, data, cb) {
    Equipment.updateOne(
        { _id: id },
        data,
         function (err, equipment) {
        if (err) {
            cb(err)
        } else {
            cb(null, equipment)
        }
    })
};

module.exports = {
    add: equipmentAdd,
    list: listEquipment,
    one: equipmentOne,
    order: orderAdd,
    upodate: upodateEquipment
}