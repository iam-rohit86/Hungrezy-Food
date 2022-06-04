import mongoose from "mongoose";

const MenuSchema = mongoose.Schema({
    menus: [{ name: { type:String, required: true},
    items: [{ type: mongoose.Types.ObjectId , ref: "Foods"}]}],
    recomended: [{
        type: mongoose.Types.ObjectId , ref: "Foods", unique: true,
    }]
    });

export const MenuModel = mongoose.model("Menu", MenuSchema);
