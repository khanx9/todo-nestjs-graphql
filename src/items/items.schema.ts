
import * as mongoose from 'mongoose';


export const ItemSchema = new mongoose.Schema({
    name: String,
    status: {
        type: Boolean,
        default: false
    },
    description: String,
    createdDate : {
        type : Date,
        default : Date.now()
    },
    changedDate : {
        type : Date,
        default : Date.now()
    }
}, { timestamps: true });