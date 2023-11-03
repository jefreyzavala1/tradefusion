import { auth } from "@clerk/nextjs"
const User = require("../models/user")

export const getUserByClerkId = async () => {
  const { userId } = await auth()
  try {
    const user = await User.findOne({ clerkId: userId })
    return user
  } catch (error) {
    console.error("Error finding user:", error)
    return null
  }
}
