import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB);
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("connected", () => {
    console.log("mongodb connected");
});

mongoose.connection.on("disconnected", () => {
    console.log("Oopss! mongodb disconnected");
});

export default connect;