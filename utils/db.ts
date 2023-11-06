import mongoose from "mongoose"

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(
      `Connected to ${mongoose.connection.name} at ${mongoose.connection.host}`,
    )
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}

export { connectToDatabase, mongoose }
