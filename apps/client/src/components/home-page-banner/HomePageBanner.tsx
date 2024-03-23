import { Box, Typography } from '@mui/material';
import { styles } from './HomePageBanner.styles';

const HomePageBanner = () => {
  return (
    <Box sx={styles.container}>
      <img
        src="src/assets/library-cover.jpg"
        alt="Book Store"
        style={{ width: '100%' }}
      />
      <Box sx={styles.overlay}>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={styles.title}
        >
          Lose Yourself in a Story
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          sx={styles.subtitle}
        >
          Find your next great read. Explore our vast collection{' '}
          <Box component="span" sx={styles.highlightText}>
            now!
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePageBanner;
