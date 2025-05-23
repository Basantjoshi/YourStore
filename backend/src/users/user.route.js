const express = require("express");
const User = require("./user.model");
const generateToken = require("../middleware/generateToken");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

//Register endPoint
router.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = new User({
      username,
      password,
      email,
    });
    await user.save();
    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
//login user endpoint

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    const token = await generateToken(user._id); // Assuming you have a method to generate a token
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // Set to true in production
      sameSite: "None",
    });
    res.status(200).send({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
        bio: user.bio,
        profession: user.profession,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
});
// logout user endpoint
router.post("/logout", (req, res) => {
  try {
    res.clearCookie("token", { path: "/" });
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

//delete user endpoint
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

//get all users endpoint
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "id email role").sort({ createdAt: -1 });
    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

//update user role endpoint
router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    if (!role) {
      return res.status(400).json({ message: "Role is required" });
    }
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User role updated successfully", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

//edit or update profile endpoint
router.patch("/edit-profile", async (req, res) => {
  try {
    const { userId, username, profileImage, bio, profession } = req.body;

    if (!userId) {
      return res.status(404).send({ message: "User not found" });
    }
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    if (username !== undefined) user.username = username;

    if (profileImage !== undefined) user.profileImage = profileImage;
    if (bio !== undefined) user.bio = bio;
    if (profession !== undefined) user.profession = profession;

    await user.save();
    res.status(200).send({
      message: "Profile updated successfully",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
        bio: user.bio,
        profession: user.profession,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
