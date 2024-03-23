import { Box, Link, Typography } from '@mui/material';
import { styles } from './Footer.styles';

const Footer = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="body1">
        {'Built with ❤️ by '}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/bogdanstanescu/"
        >
          Stănescu Bogdan
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
