import User from "../models/user"
const AddToWatchlist = ({ stock, isLoggedIn }) => {
  const handleAddToWatchList = async (stock) => {
    try {
      const user = await User.findOne({
        clerkId: "user_2XVLx5LrxH5ZUlH4wA0l5VbErRe",
      })
      console.log("this is the user", user)
    } catch (error) {
      console.error("Error adding stock to watchlist", error)
    }
  }
  return (
    <button
      className="bg-blue-500 text-white px-2 py-1 rounded-lg"
      onClick={() => handleAddToWatchList(stock)}
    >
      Add to watchlist
    </button>
  )
}

export default AddToWatchlist
