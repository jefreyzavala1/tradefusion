import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

import User from "../../models/user"
// require('../../utils/db')
const createNewUser = async () => {
  const user = await currentUser()
  console.log(user)
  if (!user) {
    return
  }
  const match = await User.findOne({ clerkId: user.id as string })
  if (!match) {
    await User.create({
      name: `${user?.firstName} ${user?.lastName}`,
      email: user?.emailAddresses[0].emailAddress,
      clerkId: user.id,
      watchlist: [],
    })
  }

  redirect("/watchlist")
}

const NewUser = async () => {
  await createNewUser()
  return <div>...loading</div>
}

export default NewUser
