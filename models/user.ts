import mongoose, { Document, Schema, Model } from "mongoose"

export interface IUser extends Document {
  name?: string
  email: string
  clerkId: string
  watchlist: any[] // You might want to specify the actual type here
}

const userSchema: Schema = new Schema<IUser>(
  {
    name: { type: String },
    email: { type: String, required: true },
    clerkId: { type: String, required: true },
    watchlist: [],
  },
  {
    timestamps: true,
  },
)

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema)

export default User
