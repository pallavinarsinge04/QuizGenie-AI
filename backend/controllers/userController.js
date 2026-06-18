const User = require("../models/User");

// ================= UPDATE PROFILE =================
exports.updateProfile = async (req, res) => {
  try {
    const { userId, name, skills, profilePic } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        name,
        skills: skills ? skills.split(",") : [],
        profilePic,
      },
      { new: true }
    );

    res.json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= UPLOAD RESUME =================
exports.uploadResume = async (req, res) => {
  try {
    const userId = req.body.userId;

    const filePath = req.file.path;

    const user = await User.findByIdAndUpdate(
      userId,
      { resume: filePath },
      { new: true }
    );

    res.json({
      message: "Resume uploaded successfully",
      resume: filePath,
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};