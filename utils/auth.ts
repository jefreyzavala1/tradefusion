import { auth } from "@clerk/nextjs"
import User from "@/models/user"
import { connectToDatabase } from "./db"
export const getUserByClerkId = async () => {
await connectToDatabase()
  const { userId } =  auth()
  try {
    console.log("YESSSIR")
    
    const user = await User.findOne({clerkId:userId})
    return user
  } catch (error) {
    console.error("Error finding user:", error)
    return null
  }
}
