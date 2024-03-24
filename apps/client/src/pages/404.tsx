import { Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        maxWidth: 400,
        margin: 'auto',
        marginTop: 4,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: 2,
          color: 'secondary.main',
        }}
      >
        404
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Page not found
      </Typography>

      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go to Homepage
      </Button>
    </Paper>
  );
};

export default NotFound;
