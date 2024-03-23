import { red } from '@mui/material/colors';

export const styles = {
  container: {
    width: '100%',
    height: '100vh',
    position: 'relative',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: 'white',
  },

  subtitle: {
    color: 'white',
    maxWidth: 600,
  },

  highlightText: {
    color: red['400'],
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
};
