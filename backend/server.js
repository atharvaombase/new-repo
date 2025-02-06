const express = require('express');
const cors = require('cors');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
      console.log('Data directory created successfully');
    } catch (error) {
      console.error('Error creating data directory:', error);
      process.exit(1);
    }
  }
  return dataDir;
};

const dataDir = ensureDataDir();

// Middleware configuration
app.use(cors({
  origin: ['http://localhost:5173', 'https://new-repo-agru1g1qn-atharvaombases-projects.vercel.app/forms'],
  credentials: true
}));
app.use(express.json());

// Excel file handling helper function
const appendToExcel = (fileName, data) => {
  try {
    const filePath = path.join(dataDir, fileName);
    let workbook;
    let sheet;

    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
      sheet = workbook.Sheets[workbook.SheetNames[0]];
    } else {
      workbook = XLSX.utils.book_new();
      const header = Object.keys(data);
      sheet = XLSX.utils.json_to_sheet([], { header });
      XLSX.utils.book_append_sheet(workbook, sheet, 'Submissions');
    }

    const jsonData = XLSX.utils.sheet_to_json(sheet);
    data.submissionTime = new Date().toISOString();
    jsonData.push(data);

    const newSheet = XLSX.utils.json_to_sheet(jsonData);
    workbook.Sheets[workbook.SheetNames[0]] = newSheet;

    XLSX.writeFile(workbook, filePath);
    return true;
  } catch (error) {
    console.error('Error in appendToExcel:', error);
    throw error;
  }
};

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running properly' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form submission:', req.body);
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contactData = { name, email, subject, message };
    await appendToExcel('contact_submissions.xlsx', contactData);

    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Failed to process contact form: ' + error.message });
  }
});

// Join form endpoint
app.post('/api/join', async (req, res) => {
  try {
    console.log('Received join form submission:', req.body);
    const { name, email, year, department, motivation, experience } = req.body;

    if (!name || !email || !year || !department || !motivation) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    const joinData = {
      name,
      email,
      yearOfStudy: year,
      department,
      motivation,
      experience: experience || 'None provided'
    };

    await appendToExcel('join_applications.xlsx', joinData);

    res.status(200).json({ message: 'Join application submitted successfully' });
  } catch (error) {
    console.error('Error processing join application:', error);
    res.status(500).json({ error: 'Failed to process join application: ' + error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Data directory: ${dataDir}`);
});