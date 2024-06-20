const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://savinyu:IlH5dMoIgOp9nsl2@cluster0.gzrbnpi.mongodb.net/paytm')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        min: 5,
      },
      picturePath: {
        type: String,
        default: "",
      },
      friends: {
        type: Array,
        default: [],
      },
      location: String,
      occupation: String,
      viewedProfile: Number,
      impressions: Number,
    },
    { timestamps: true 
});

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts",postSchema);
const Users = mongoose.model("Users",userSchema);

module.exports = {
    Users,
    Posts
};