import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'

export default function Header({title,subtitle,isDashboard =false }) {
 const theme = useTheme();

  return (
    <Box mb={isDashboard? 0 : 4 }>
      <Typography
        sx={{ color: theme.palette.info.light }}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography textTransform={"capitalize"} variant="body1">
       {subtitle}
      </Typography>
    </Box>
  );
}
