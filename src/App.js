import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Responsive Box</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
