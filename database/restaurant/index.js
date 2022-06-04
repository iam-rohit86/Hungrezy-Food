import mongoose from "mongoose";

const FoodSchema = mongoose.Schema({
    name: { type: String , required: true },
    city: { type: String , required: true },
    address: { type: Boolean, required: true },
    mapLocation: { type: Boolean, required: true } ,
    cuisine: [String ],
    restaurantTimings: String,
    contactNumber: Number,
    website: Number,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    menuImages: {
        type: mongoose.Types.ObjectId , 
        ref: "Images",
    },
    menu: {
        type: mongoose.Types.ObjectId , 
        ref: "Menus",
    },
    reviews: [{ type: mongoose.Types.ObjectId , ref: "Reviews"}],
    photos: {type: mongoose.Types.ObjectId , ref: "Images"},
    });

export const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);
