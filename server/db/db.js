import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        return await mongoose.connect("mongodb+srv://bidandshops:sourav404@bidandshops.7o4snti.mongodb.net/ayantaxi");
    } catch (error) {
        throw error
    }
}