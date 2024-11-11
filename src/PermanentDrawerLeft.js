import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Typography} from '@mui/material';
import TheatersIcon from '@mui/icons-material/Theaters';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import MovieIcon from '@mui/icons-material/Movie';





const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
             bgcolor: '#FAF3E0',
             marginTop: '1px',
             color: '#4B2C20'
          
          },
        }}
        variant="permanent"
        anchor="left"
      >
       


       <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          animation: 'popup 1s ease-out', // Apply the animation
          '@keyframes popup': {
            '0%': {
              opacity: 0,
              transform: 'scale(0.5)',
            },
            '100%': {
              opacity: 1,
              transform: 'scale(1)',
            },
          },
        }}
      >
        FILMFARE
      </Typography>
    </Box>

        <Toolbar />
        <Divider />

        <List style={{marginBottom: "200px", color: '#4B2C20'}}>
          {['My List', 'Genre', 'Top 10', 'Settings'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                {index % 4 === 0 ? (
                <ChecklistIcon />
                ) : index % 4 === 1 ? (
                <TheatersIcon />
                ) : index % 4 === 2 ? (
                <SettingsIcon />
               ) : (
              <MovieIcon />
              )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box 
       component="main"
       sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, color: '#4B2C20' }}
     >
    
        <Toolbar />
        
      </Box>
    </Box>
  );
}
