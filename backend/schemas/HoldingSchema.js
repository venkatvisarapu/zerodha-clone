const {Schema} = require ("mongoose");
const HoldingSchema = new Schema ({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: String,
    qty: Number,
    avg:  Number,
    price: Number,
    net:  String,
    day:   String,

});


module.exports={HoldingSchema};