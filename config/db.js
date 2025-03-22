import mongoose from "mongoose";

const connectDB = async () =>{
    try{
       const conn = await mongoose.connect(process.env.MONGO_URL);
       console.log(`Connected to MOngodb database ${conn.connection.host}`)
    }catch(error){
     console.error(`Error in Mongodb ${error}`)
    };
}
export default connectDB