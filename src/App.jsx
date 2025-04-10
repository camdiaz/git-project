import { useState } from 'react'
import { Box, Container, Typography, Tabs, Tab, Paper, useTheme } from '@mui/material'
import GitCommands from './components/GitCommands'
import TextGrids from './components/TextGrids'
import GitDefinitions from './components/GitDefinitions'
import DevelopmentTools from './components/DevelopmentTools'
import WTM from './images/WTM.png'
import PionerasDev from './images/PionerasDev.png'
import WIE from './images/WIE.png'
import './App.css'

function App() {
  const [currentTab, setCurrentTab] = useState(0)
  const theme = useTheme()

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue)
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        my: 4,
        background: `linear-gradient(45deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
        borderRadius: 2,
        p: 4,
        mb: 4
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: 4, 
          mb: 4, 
          flexWrap: 'wrap',
          '& img': {
            width: '200px',
            height: 'auto',
            maxHeight: '100px',
            objectFit: 'contain',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
          }
        }}>
          <img src={WTM} alt="Woman Tech Makers" />
          <img src={PionerasDev} alt="PionerasDev" />
          <img src={WIE} alt="Women in Engineering" />
        </Box>

        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{ 
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          GIT + GITHUB
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom align="center"
          sx={{ color: 'white' }}>
          Taller por: Camila Díaz
        </Typography>
      </Box>

      <Paper 
        sx={{ 
          width: '100%', 
          mb: 4,
          background: 'white',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          sx={{
            '& .MuiTab-root': {
              color: theme.palette.secondary.main,
              '&.Mui-selected': {
                color: theme.palette.primary.main,
                fontWeight: 'bold'
              }
            }
          }}
        >
          <Tab label="Definiciones" />
          <Tab label="Comandos de Git" />
          <Tab label="Herramientas" />
          <Tab label="Testing" />
        </Tabs>
      </Paper>

      <Box sx={{ 
        background: 'white',
        borderRadius: 2,
        p: 3,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        {currentTab === 0 && <GitDefinitions />}
        {currentTab === 1 && <GitCommands />}
        {currentTab === 2 && <DevelopmentTools />}
        {currentTab === 3 && <TextGrids />}
      </Box>
    </Container>
  )
}

export default App
