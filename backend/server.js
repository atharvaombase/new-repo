const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 5000;

// Replace with your actual MongoDB credentials
const uri = "mongodb+srv://aaombase:mdFnbwprusVgv9Xt@cluster0.ustnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173', // Local development
    'https://codestormweb.vercel.app', // Previous deployment
    'https://new-repo-fnidrs8sz-atharvaombases-projects.vercel.app', // New deployment
    /\.vercel\.app$/ // Match all Vercel subdomains
  ],
  credentials: true
}));
app.use(express.json());

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB!");

    // Database and collections
    const db = client.db("codestormDB");
    const contactsCollection = db.collection("contacts");
    const applicationsCollection = db.collection("applications");

    // Health check endpoint
    app.get('/', (req, res) => {
      res.json({ status: 'Server is running', database: 'MongoDB' });
    });

    // Contact form endpoint
    app.post('/api/contact', async (req, res) => {
      try {
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

        res.status(200).json({
          message: 'Contact form submitted successfully',
          id: result.insertedId
        });
      } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ error: 'Failed to process contact form' });
      }
    });

    // Join form endpoint
    app.post('/api/join', async (req, res) => {
      try {
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

        res.status(200).json({
          message: 'Application submitted successfully!',
          id: result.insertedId
        });
      } catch (error) {
        console.error('Join form error:', error);
        res.status(500).json({ error: 'Failed to process application' });
      }
    });

    // Get all contacts (for testing/viewing data)
    app.get('/api/contacts', async (req, res) => {
      try {
        const contacts = await contactsCollection.find({}).toArray();
        res.json(contacts);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve contacts' });
      }
    });

    // Get all applications (for testing/viewing data)
    app.get('/api/applications', async (req, res) => {
      try {
        const applications = await applicationsCollection.find({}).toArray();
        res.json(applications);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve applications' });
      }
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } finally {
    // The server will maintain the connection open
    // You might want to close it when your application stops
    // process.on('SIGINT', () => client.close());
  }
}

run().catch(console.dir);