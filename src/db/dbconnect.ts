import mongoose from "mongoose";
export async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("Connected to MongoDB");
        });

        connection.on("error", (err) => {
            console.error("Error connecting to MongoDB:", err);
            process.exit();
        });
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}