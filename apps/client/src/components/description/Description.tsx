import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

interface DescriptionProps {
  text: string;
  maxLength: number;
}

const Description: React.FC<DescriptionProps> = ({ text, maxLength }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleShowMore = () => setShowFullDescription(!showFullDescription);

  return (
    <Box>
      <Typography variant="body2" color="textSecondary">
        {showFullDescription ? text : text.substring(0, maxLength) + '...'}

        <Button size="small" onClick={handleShowMore}>
          {showFullDescription ? 'Read Less' : 'Show More'}
        </Button>
      </Typography>
    </Box>
  );
};

export default Description;
