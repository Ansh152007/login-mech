import mongoose from "mongoose";
// Connect to MongoDB

const ConnectDB = async () =>
  {
    try{ const ConnectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/passwordmanage`)
        console.log(`Connected to MongoDB \n DB_NAME: ${ConnectionInstance.connection.host}`)
      
    }catch(error){
      console.log("Mongo DB connection failed", error )
      process.exit(1)
    }
  }

export default ConnectDB