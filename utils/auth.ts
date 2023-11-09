import { auth } from "@clerk/nextjs"
import User from "@/models/user"
export const getUserByClerkId = async () => {
  const { userId } =  auth()
  try {
    const user = await User.findOne({clerkId:userId})
    return user
  } catch (error) {
    console.error("Error finding user:", error)
    return null
  }
}
