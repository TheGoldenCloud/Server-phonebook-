import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
      username: {
        type: String,
        required: [true, "Please add the user name"],
      },
      email: {
        type: String,
        required: [true, "Please add the user email address"],
        unique: [true, "Email address already taken"],
      },
      password: {
        type: String,
        required: [true, "Please add the user password"],
      },
    },
    {
      timestamps: true,
    }
  );

let UserModel = mongoose.model('User',userSchema);

export default UserModel; 