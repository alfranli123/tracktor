# Vehicle Management System Documentation

## Overview
This is a comprehensive vehicle management application that helps users track and manage their vehicle fleet, including fuel consumption, maintenance schedules, insurance policies, and pollution certificates.

## Architecture

### Frontend (Client)
- **Framework**: SvelteKit with TypeScript
- **Styling**: Tailwind CSS
- **Port**: 5173
- **Build Tool**: Vite

### Backend (Server)
- **Framework**: Express.js with TypeScript
- **Database**: SQLite (planned)
- **Port**: 3333
- **API**: RESTful endpoints

## Project Structure

```
├── client/                 # Frontend SvelteKit application
│   ├── src/
│   │   ├── routes/        # SvelteKit routes
│   │   ├── styles/        # CSS styles
│   │   └── app.html       # HTML template
│   ├── package.json
│   └── vite.config.ts
├── server/                # Backend Express.js application
│   ├── index.ts          # Main server file
│   ├── package.json
│   └── tsconfig.json
├── documentation/         # Project documentation
└── package.json          # Root package.json for scripts
```

## Features

### Current Implementation
1. **System Status Dashboard**: Shows connection status and basic metrics
2. **API Health Check**: Verifies backend connectivity
3. **Configuration Management**: Fetches and displays system configuration
4. **Responsive Design**: Mobile-friendly interface with dark mode support

### Planned Features
1. **Vehicle Management**: Add, edit, and track vehicles
2. **Fuel Log Tracking**: Record and analyze fuel consumption
3. **Maintenance Scheduling**: Track maintenance tasks and schedules
4. **Insurance Management**: Manage insurance policies and renewals
5. **Pollution Certificate Tracking**: Monitor PUCC validity and renewals

## API Endpoints

### Current Endpoints
- `GET /api/config` - Fetch system configuration
- `GET /api/health` - Health check endpoint
- `GET /api/vehicles` - List vehicles (placeholder)
- `GET /api/fuel-logs` - List fuel logs (placeholder)
- `GET /api/maintenance-logs` - List maintenance records (placeholder)
- `GET /api/insurance` - List insurance policies (placeholder)
- `GET /api/pucc` - List pollution certificates (placeholder)

## Environment Configuration

### Client Environment Variables
- `PORT`: Frontend server port (default: 5173)
- `VITE_PUBLIC_API_BASE_URL`: Backend API base URL (default: http://localhost:3333)
- `PUBLIC_DEMO_MODE`: Enable demo mode (default: false)

### Server Environment Variables
- `PORT`: Backend server port (default: 3333)
- `NODE_ENV`: Environment mode (development/production)
- `DB_PATH`: SQLite database file path

## Development Setup

1. **Install Dependencies**:
   ```bash
   npm run install:all
   ```

2. **Start Development Servers**:
   ```bash
   npm run dev
   ```
   This starts both frontend (port 5173) and backend (port 3333) concurrently.

3. **Individual Server Commands**:
   ```bash
   npm run dev:client  # Start only frontend
   npm run dev:server  # Start only backend
   ```

## Error Handling

The application includes comprehensive error handling:
- **Connection Errors**: Displays user-friendly messages when backend is unavailable
- **API Errors**: Shows specific error messages with retry functionality
- **Loading States**: Provides visual feedback during data fetching

## Code Changes Made

### ✅ Added: Project Structure Conversion
- Converted Docker-based project to Bolt-compatible structure
- Created root package.json with concurrent script execution
- Set up proper TypeScript configurations for both client and server

### ✅ Added: Frontend Implementation
- Implemented SvelteKit application with TypeScript
- Added Tailwind CSS for styling with dark mode support
- Created responsive dashboard with system status display
- Implemented error handling with retry functionality

### ✅ Added: Backend Implementation
- Created Express.js server with TypeScript
- Added CORS middleware for cross-origin requests
- Implemented basic API endpoints for testing
- Added health check and configuration endpoints

### ✅ Added: Environment Configuration
- Set up environment variables for both client and server
- Configured proper API base URL for local development
- Added development and production environment support

### 🔄 Modified: Error Resolution
- Fixed mixed content error by ensuring consistent HTTP protocol usage
- Implemented proper error handling in frontend for API failures
- Added connection retry functionality with user feedback

## Next Steps

1. **Database Integration**: Implement SQLite database with proper schema
2. **Authentication**: Add user authentication and authorization
3. **CRUD Operations**: Implement full CRUD for all entities
4. **Data Validation**: Add input validation and sanitization
5. **Testing**: Add unit and integration tests
6. **Deployment**: Configure for production deployment

## Technical Notes

- The application uses ES modules throughout for modern JavaScript support
- TypeScript is configured with strict mode for better type safety
- Tailwind CSS provides utility-first styling approach
- SvelteKit offers file-based routing and server-side rendering capabilities
- Express.js provides a lightweight and flexible backend framework