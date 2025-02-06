const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Replace with your actual MongoDB URI (Store this in Vercel Env Variables)
const MONGO_URI = process.env.MONGODB_URI || "your-mongodb-connection-string";

// ✅ Create a MongoDB Client
let client;
let db;
let contactsCollection;
let applicationsCollection;

// ✅ Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://codestormweb.vercel.app",
      "https://new-repo-fnidrs8sz-atharvaombases-projects.vercel.app",
      /\.vercel\.app$/, // Matches all Vercel subdomains
    ],
    credentials: true,
  })
);
app.use(express.json());

// ✅ Connect to MongoDB
async function connectDB() {
  try {
    client = new MongoClient(MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    console.log("✅ Connected to MongoDB");

    db = client.db("codestormDB"); // Ensure this matches your database name
    contactsCollection = db.collection("contacts");
    applicationsCollection = db.collection("applications");

    console.log("✅ Database & Collections Initialized");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
}

// ✅ Health Check Endpoint
app.get("/", (req, res) => {
  console.log("🌐 Health check request received");
  res.json({ status: "Server is running", database: "MongoDB" });
});

// ✅ Contact Form Submission
app.post("/api/contact", async (req, res) => {
  console.log("📩 Contact form submission received:", req.body);

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      console.warn("⚠️ Missing required fields in contact form");
      return res.status(400).json({ error: "All fields are required" });
    }

    const result = await contactsCollection.insertOne({
      name,
      email,
      subject,
      message,
      submissionTime: new Date(),
    });

    console.log(
      "✅ Contact form successfully saved with ID:",
      result.insertedId
    );
    res.status(200).json({
      message: "Contact form submitted successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    res.status(500).json({ error: "Failed to process contact form" });
  }
});

// ✅ Join Form Submission
app.post("/api/join", async (req, res) => {
  console.log("📝 Join form submission received:", req.body);

  try {
    const { name, email, year, department, motivation, experience } = req.body;

    if (!name || !email || !year || !department || !motivation) {
      console.warn("⚠️ Missing required fields in join form");
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await applicationsCollection.insertOne({
      name,
      email,
      year,
      department,
      motivation,
      experience: experience || "No experience provided",
      submissionTime: new Date(),
    });

    console.log("✅ Join form successfully saved with ID:", result.insertedId);
    res.status(200).json({
      message: "Application submitted successfully!",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("❌ Join form error:", error);
    res.status(500).json({ error: "Failed to process application" });
  }
});

// ✅ Retrieve All Contacts
app.get("/api/contacts", async (req, res) => {
  console.log("📜 Fetching all contacts...");

  try {
    const contacts = await contactsCollection.find({}).toArray();
    console.log(`✅ Retrieved ${contacts.length} contacts`);
    res.json(contacts);
  } catch (error) {
    console.error("❌ Failed to retrieve contacts:", error);
    res.status(500).json({ error: "Failed to retrieve contacts" });
  }
});

// ✅ Retrieve All Applications
app.get("/api/applications", async (req, res) => {
  console.log("📜 Fetching all applications...");

  try {
    const applications = await applicationsCollection.find({}).toArray();
    console.log(`✅ Retrieved ${applications.length} applications`);
    res.json(applications);
  } catch (error) {
    console.error("❌ Failed to retrieve applications:", error);
    res.status(500).json({ error: "Failed to retrieve applications" });
  }
});

// ✅ Start the Server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  await connectDB(); // Ensure database is connected before handling requests
});
