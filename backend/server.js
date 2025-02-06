const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  return dataDir;
};

const dataDir = ensureDataDir();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://codestormweb.vercel.app'],
  credentials: true
}));
app.use(express.json());

// Helper function to save data to JSON files
const saveToJson = (fileName, data) => {
  try {
    const filePath = path.join(dataDir, fileName);
    let existingData = [];

    // Read existing data if file exists
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      existingData = JSON.parse(fileContent);
    }

    // Add timestamp and new entry
    const entry = {
      ...data,
      submissionTime: new Date().toISOString()
    };

    existingData.push(entry);

    // Write updated data
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
};

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Server is running', dataDirectory: dataDir });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    await saveToJson('contacts.json', { name, email, subject, message });
    res.status(200).json({ message: 'Message received successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact form' });
  }
});

// Join form endpoint
app.post('/api/join', async (req, res) => {
  try {
    const { name, email, year, department, motivation, experience } = req.body;

    if (!name || !email || !year || !department || !motivation) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await saveToJson('joinApplications.json', {
      name,
      email,
      year,
      department,
      motivation,
      experience: experience || 'No experience provided'
    });

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process application' });
  }
});

// Get all contacts (for testing/viewing data)
app.get('/api/contacts', (req, res) => {
  try {
    const filePath = path.join(dataDir, 'contacts.json');
    if (!fs.existsSync(filePath)) {
      return res.json([]);
    }
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
});

// Get all join applications (for testing/viewing data)
app.get('/api/applications', (req, res) => {
  try {
    const filePath = path.join(dataDir, 'joinApplications.json');
    if (!fs.existsSync(filePath)) {
      return res.json([]);
    }
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve applications' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Data stored in: ${dataDir}`);
});