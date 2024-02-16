import mongoose from "mongoose";

// Define the schema for booking
const bookingSchema = new mongoose.Schema({
    fromAddress: {
        type: String,
        required: true
    },
    toAddress: {
        type: String,
        required: true
    },
    pickupDate: {
        type: Date,
        required: true
    },
    pickupTime: {
        type: String,
        required: true
    },
    selectedCar: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// Create a model using the schema
export const Booking = mongoose.model('Booking', bookingSchema);

