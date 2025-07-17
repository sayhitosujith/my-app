// server.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_V5LZpk0YIbrM@ep-quiet-cell-a85uzwl7-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password, zipCode } = req.body;
    await pool.query(
      `INSERT INTO Users (firstName, lastName, email, phoneNumber, password, zipCode)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [firstName, lastName, email, phoneNumber, password, zipCode]
    );
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Insert failed' });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
