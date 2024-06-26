const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	contact: { type: String, required: true },
	address: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	profileImage: { type: String }, // Added profile image field
	likedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
});

module.exports = mongoose.model("User", userSchema);
