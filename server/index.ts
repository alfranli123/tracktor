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

// API routes
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

// Placeholder API routes
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

// Handle root route - redirect to frontend
app.get('/', (req, res) => {
  res.json({
    message: 'Vehicle Management System API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      config: '/api/config',
      health: '/api/health',
      vehicles: '/api/vehicles',
      fuelLogs: '/api/fuel-logs',
      maintenanceLogs: '/api/maintenance-logs',
      insurance: '/api/insurance',
      pucc: '/api/pucc'
    },
    frontend: 'http://localhost:5173'
  });
});

// Handle 404 for unknown routes
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The route ${req.originalUrl} does not exist`,
    availableRoutes: [
      '/api/config',
      '/api/health',
      '/api/vehicles',
      '/api/fuel-logs',
      '/api/maintenance-logs',
      '/api/insurance',
      '/api/pucc'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📱 Frontend available at http://localhost:5173`);
  console.log(`🔧 API endpoints available at http://localhost:${PORT}/api/*`);
});
</parameter>