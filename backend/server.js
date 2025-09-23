const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const debtRoutes = require('./routes/debtRoutes'); // ✅ Import your debt routes

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
  res.send('DebtEase API running ✅');
});

// ✅ Mount debt routes
app.use('/api/debts', debtRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect(MONGO_URI);

