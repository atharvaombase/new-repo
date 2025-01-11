// backend/server.js
const express = require('express');
const cors = require('cors');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
  credentials: true
}));
app.use(express.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Helper function to append data to Excel file
const appendToExcel = (fileName, data) => {
  let workbook;
  const filePath = path.join(__dirname, 'data', fileName);

  // Check if file exists
  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
  } else {
    workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet([]), 'Sheet1');
  }

  const sheet = workbook.Sheets['Sheet1'];
  const existingData = XLSX.utils.sheet_to_json(sheet);
  
  // Add timestamp to the data
  data.submissionTime = new Date().toISOString();
  
  existingData.push(data);
  
  const newSheet = XLSX.utils.json_to_sheet(existingData);
  workbook.Sheets['Sheet1'] = newSheet;
  
  // Write to file
  XLSX.writeFile(workbook, filePath);
};

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running properly' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  try {
    console.log('Received contact form submission:', req.body);
    const { name, email, subject, message } = req.body;
    
    const contactData = {
      name,
      email,
      subject,
      message
    };
    
    appendToExcel('contact_submissions.xlsx', contactData);
    
    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Failed to process contact form' });
  }
});

// Join form endpoint
app.post('/api/join', (req, res) => {
  try {
    console.log('Received join form submission:', req.body);
    const { name, email, year, department, motivation, experience } = req.body;
    
    const joinData = {
      name,
      email,
      yearOfStudy: year,
      department,
      motivation,
      experience: experience || 'None provided'
    };
    
    appendToExcel('join_applications.xlsx', joinData);
    
    res.status(200).json({ message: 'Join application submitted successfully' });
  } catch (error) {
    console.error('Error processing join application:', error);
    res.status(500).json({ error: 'Failed to process join application' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Data directory: ${dataDir}`);
});