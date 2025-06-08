const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    status: {
        type: String,
        enum: ['EXECUTED', 'PENDING', 'CANCELLED', 'REJECTED'],
        default: 'EXECUTED'
    }
}, {
    timestamps: true
});

module.exports = { OrderSchema };