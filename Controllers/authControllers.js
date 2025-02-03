const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        // Generate token valid for **1 minute**
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1m" });

        res.json({ token, message: "Login successful!" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};
