import mongoose from 'mongoose'

//const uri = "mongodb+srv://hozefa1234:24061996@cluster0.7oedq.mongodb.net/proshop?retryWrites=true&w=majority"
//process.env.MONGO_URI
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)

    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1) // 1 Exit with Failure
    }
}


export default connectDB;