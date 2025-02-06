const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

// Load environment variables (ensure you set MONGODB_URI in Vercel)
const uri = process.env.MONGODB_URI;

// Setup MongoDB connection (Singleton pattern)
let client;
let clientPromise;

if (!client) {
  client = new MongoClient(uri, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
  });
  clientPromise = client.connect();
}

async function getDB() {
  await clientPromise;
  return client.db("codestormDB");
}

// Middleware
app.use(cors({
  origin: '*', // Allow all origins (adjust for production)
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Server is running', database: 'MongoDB' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const db = await getDB();
    const contactsCollection = db.collection("contacts");

    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const result = await contactsCollection.insertOne({
      name,
      email,
      subject,
      message,
      submissionTime: new Date()
    });

    res.status(200).json({ message: 'Contact form submitted successfully', id: result.insertedId });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to process contact form' });
  }
});

// Join form endpoint
app.post('/api/join', async (req, res) => {
  try {
    const db = await getDB();
    const applicationsCollection = db.collection("applications");

    const { name, email, year, department, motivation, experience } = req.body;
    if (!name || !email || !year || !department || !motivation) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await applicationsCollection.insertOne({
      name,
      email,
      year,
      department,
      motivation,
      experience: experience || 'No experience provided',
      submissionTime: new Date()
    });

    res.status(200).json({ message: 'Application submitted successfully!', id: result.insertedId });
  } catch (error) {
    console.error('Join form error:', error);
    res.status(500).json({ error: 'Failed to process application' });
  }
});

// Get all contacts (for testing/viewing data)
app.get('/api/contacts', async (req, res) => {
  try {
    const db = await getDB();
    const contactsCollection = db.collection("contacts");
    const contacts = await contactsCollection.find({}).toArray();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
});

// Get all applications (for testing/viewing data)
app.get('/api/applications', async (req, res) => {
  try {
    const db = await getDB();
    const applicationsCollection = db.collection("applications");
    const applications = await applicationsCollection.find({}).toArray();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve applications' });
  }
});

// Export as a Vercel serverless function
module.exports = app;
