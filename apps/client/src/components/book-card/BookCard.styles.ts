export const styles = {
  card: {
    maxWidth: 345,
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
    mt: 2,
    mx: 2,
  },

  layout: {
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
    opacity: 0,
    transition: 'opacity 0.3s',
    '&:hover': {
      opacity: 1,
    },
  },

  media: {
    height: '300px',
    pt: 2,
    px: 2,
  },
};
