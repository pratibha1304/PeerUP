const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

const indexRoutes = require('./routes/index');
const matchRoutes = require('./routes/match'); // ✅ your match route file
const swipeRoutes = require('./routes/swipe');

console.log('🚨 matchRoutes is:', typeof matchRoutes);
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(swipeRoutes);
app.use('/', matchRoutes); // ✅ correct way to add match route
// Routes
app.use('/', indexRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
