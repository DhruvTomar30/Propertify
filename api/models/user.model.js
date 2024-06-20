import mongoose from "mongoose";
import { type } from "os";
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String, // Ensure avatar field is defined in the schema
      default: "https://imgs.search.brave.com/pTopBbUFdYAukv2XiZZOGHPGZN-03eJBBMyU1u9QCD0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zMC0z/MDc0MTZfcHJvZmls/ZS1pY29uLXBuZy1p/bWFnZS1mcmVlLWRv/d25sb2FkLXNlYXJj/aHBuZy1lbXBsb3ll/ZS5wbmc"
    }, 
  }, { timestamps: true });

const User =mongoose.model("User",userSchema);

export default User;