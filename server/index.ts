import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
app.use(cors());
app.use(express.json());

// Basic routes for testing
app.get('/api/config', (req, res) => {
  res.json({
    appName: 'Vehicle Management System',
    version: '1.0.0',
    features: {
      fuelTracking: true,
      maintenanceLog: true,
      insurance: true,
      pollutionCertificate: true
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Placeholder routes
app.get('/api/vehicles', (req, res) => {
  res.json([]);
});

app.get('/api/fuel-logs', (req, res) => {
  res.json([]);
});

app.get('/api/maintenance-logs', (req, res) => {
  res.json([]);
});

app.get('/api/insurance', (req, res) => {
  res.json([]);
});

app.get('/api/pucc', (req, res) => {
  res.json([]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});