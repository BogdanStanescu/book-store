import { Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styles } from './ErrorFallback.styles';

const ErrorFallback = () => {
  const navigate = useNavigate();

  return (
    <Paper sx={styles.paper}>
      <Typography variant="h5" gutterBottom sx={styles.typography}>
        Oops! Something went wrong.
      </Typography>

      <Typography variant="body1" sx={styles.typography}>
        We're sorry, but an unexpected error occurred.
      </Typography>

      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go to Homepage
      </Button>
    </Paper>
  );
};

export default ErrorFallback;
