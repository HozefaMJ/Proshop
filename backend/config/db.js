import mongoose from 'mongoose'

<<<<<<< HEAD
=======

>>>>>>> 429cb965a902f82539a31154dd51fb866cd783ed
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
