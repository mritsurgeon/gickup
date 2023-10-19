import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import SourceConfig from './source';
import DestinationConfig from './destination';
import SchedulerConfig from './scheduler';
import Stats from './stats';


function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1, bgcolor: '#f0f0f0', minHeight: '100vh' }}>
        <AppBar position="static" sx={{ bgcolor: '#4caf50' }}>
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Source Code Backup
            </Typography>
            <nav style={{ marginLeft: '20px' }}>
              <Button component={Link} to="/source" variant="contained" style={{ marginRight: '10px' }}>
                Source Code Repository
              </Button>
              <Button component={Link} to="/destination" variant="contained" style={{ marginRight: '10px' }}>
                Destination Backup Repository
              </Button>
              <Button component={Link} to="/scheduler" variant="contained"style={{ marginRight: '10px' }}>
                Backup Scheduler
              </Button>
              <Button component={Link} to="/stats" variant="contained">
                Backup Statistics
              </Button>
            </nav>
          </Toolbar>
        </AppBar>

        <Container
          maxWidth="md"
          style={{ marginTop: '20px' }}
          sx={{ backgroundColor: '#f5f5f5', padding: '20px', minHeight: '100vh' }}>
          <Routes>
            <Route path="/source" element={<SourceConfig />} />
            <Route path="/destination" element={<DestinationConfig />} />
            <Route path="/scheduler" element={<SchedulerConfig />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;