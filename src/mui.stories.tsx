import { Box, Paper } from '@mui/material';

export const MuiExample = () => {
  return (
    <>
      <h3>Mui Story</h3>
      <Box p={2} sx={{ backgroundColor: 'dimgray' }}>
        Box Stories
      </Box>
      <Box p={2}>Box Stories</Box>
      <Paper sx={{ p: 2 }}>Paper Stories</Paper>
    </>
  );
};
