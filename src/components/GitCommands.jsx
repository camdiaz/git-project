import { 
  Box, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  useTheme,
  Grid,
  IconButton,
  Tooltip
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

const gitCommands = [
  {
    category: 'Configuración Inicial',
    icon: <SettingsIcon />,
    commands: [
      {
        command: 'git config --global user.name "Tu Nombre"',
        description: 'Configura tu nombre de usuario para Git',
        example: 'git config --global user.name "Ana Pérez"'
      },
      {
        command: 'git config --global user.email "tu@email.com"',
        description: 'Configura tu correo electrónico para Git',
        example: 'git config --global user.email "ana@ejemplo.com"'
      },
      {
        command: 'git config --list',
        description: 'Muestra todas las configuraciones de Git',
        example: 'git config --list'
      },
      {
        command: 'git config --global core.editor "editor"',
        description: 'Configura el editor por defecto para Git',
        example: 'git config --global core.editor "code --wait"'
      }
    ]
  },
  {
    category: 'Repositorios',
    icon: <StorageIcon />,
    commands: [
      {
        command: 'git init',
        description: 'Inicializa un nuevo repositorio Git',
        example: 'git init'
      },
      {
        command: 'git clone [url]',
        description: 'Clona un repositorio existente',
        example: 'git clone https://github.com/usuario/repositorio.git'
      },
      {
        command: 'git remote -v',
        description: 'Lista los repositorios remotos configurados',
        example: 'git remote -v'
      },
      {
        command: 'git remote add [nombre] [url]',
        description: 'Agrega un nuevo repositorio remoto',
        example: 'git remote add origin https://github.com/usuario/repositorio.git'
      },
      {
        command: 'git remote remove [nombre]',
        description: 'Elimina un repositorio remoto',
        example: 'git remote remove origin'
      }
    ]
  },
  {
    category: 'Cambios y Commits',
    icon: <CodeIcon />,
    commands: [
      {
        command: 'git status',
        description: 'Muestra el estado de los archivos en el directorio de trabajo',
        example: 'git status'
      },
      {
        command: 'git add [archivo]',
        description: 'Agrega un archivo al área de preparación',
        example: 'git add index.html'
      },
      {
        command: 'git add .',
        description: 'Agrega todos los archivos modificados al área de preparación',
        example: 'git add .'
      },
      {
        command: 'git commit -m "mensaje"',
        description: 'Guarda los cambios en el repositorio con un mensaje descriptivo',
        example: 'git commit -m "Agrega nueva funcionalidad de login"'
      },
      {
        command: 'git commit --amend',
        description: 'Modifica el último commit',
        example: 'git commit --amend -m "Nuevo mensaje"'
      },
      {
        command: 'git reset [archivo]',
        description: 'Elimina un archivo del área de preparación',
        example: 'git reset index.html'
      },
      {
        command: 'git reset --hard',
        description: 'Descarta todos los cambios locales',
        example: 'git reset --hard'
      }
    ]
  },
  {
    category: 'Ramas',
    icon: <TimelineIcon />,
    commands: [
      {
        command: 'git branch',
        description: 'Lista todas las ramas locales',
        example: 'git branch'
      },
      {
        command: 'git branch [nombre]',
        description: 'Crea una nueva rama',
        example: 'git branch feature/login'
      },
      {
        command: 'git checkout [rama]',
        description: 'Cambia a una rama específica',
        example: 'git checkout main'
      },
      {
        command: 'git checkout -b [nombre]',
        description: 'Crea y cambia a una nueva rama',
        example: 'git checkout -b feature/login'
      },
      {
        command: 'git branch -d [rama]',
        description: 'Elimina una rama local',
        example: 'git branch -d feature/login'
      },
      {
        command: 'git merge [rama]',
        description: 'Fusiona una rama con la rama actual',
        example: 'git merge feature/login'
      },
      {
        command: 'git rebase [rama]',
        description: 'Reaplica los commits de la rama actual sobre otra rama',
        example: 'git rebase main'
      }
    ]
  },
  {
    category: 'Sincronización',
    icon: <CompareArrowsIcon />,
    commands: [
      {
        command: 'git pull',
        description: 'Obtiene cambios del repositorio remoto y los fusiona',
        example: 'git pull origin main'
      },
      {
        command: 'git push',
        description: 'Envía cambios al repositorio remoto',
        example: 'git push origin main'
      },
      {
        command: 'git fetch',
        description: 'Obtiene cambios del repositorio remoto sin fusionarlos',
        example: 'git fetch origin'
      },
      {
        command: 'git push -u origin [rama]',
        description: 'Establece la rama remota por defecto y envía cambios',
        example: 'git push -u origin main'
      },
      {
        command: 'git push --force',
        description: 'Fuerza el envío de cambios al repositorio remoto',
        example: 'git push --force origin main'
      }
    ]
  },
  {
    category: 'Historial y Cambios',
    icon: <TimelineIcon />,
    commands: [
      {
        command: 'git log',
        description: 'Muestra el historial de commits',
        example: 'git log'
      },
      {
        command: 'git log --oneline',
        description: 'Muestra el historial de commits en una línea',
        example: 'git log --oneline'
      },
      {
        command: 'git log --graph',
        description: 'Muestra el historial con un gráfico de ramas',
        example: 'git log --graph --oneline --all'
      },
      {
        command: 'git diff',
        description: 'Muestra los cambios no preparados',
        example: 'git diff'
      },
      {
        command: 'git diff --staged',
        description: 'Muestra los cambios preparados',
        example: 'git diff --staged'
      },
      {
        command: 'git show [commit]',
        description: 'Muestra los cambios de un commit específico',
        example: 'git show abc123'
      },
      {
        command: 'git stash',
        description: 'Guarda temporalmente los cambios locales',
        example: 'git stash save "mensaje"'
      }
    ]
  },
  {
    category: 'Colaboración',
    icon: <GroupIcon />,
    commands: [
      {
        command: 'git fork',
        description: 'Crea una copia personal de un repositorio',
        example: 'Hacer fork desde la interfaz de GitHub'
      },
      {
        command: 'git pull request',
        description: 'Solicita la integración de cambios',
        example: 'Crear pull request desde la interfaz de GitHub'
      },
      {
        command: 'git blame [archivo]',
        description: 'Muestra quién modificó cada línea de un archivo',
        example: 'git blame index.html'
      },
      {
        command: 'git cherry-pick [commit]',
        description: 'Aplica los cambios de un commit específico',
        example: 'git cherry-pick abc123'
      }
    ]
  }
];

const GitCommands = () => {
  const theme = useTheme();
  const [copiedCommand, setCopiedCommand] = useState(null);

  const handleCopyCommand = (command) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto', p: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ color: theme.palette.primary.main }}
      >
        Comandos de Git
      </Typography>
      <Typography 
        variant="body1" 
        paragraph
        sx={{ color: theme.palette.secondary.main }}
      >
        Guía completa de comandos Git para el control de versiones.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {gitCommands.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.category}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 3,
                height: '100%',
                minHeight: '600px',
                maxWidth: '400px',
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.primary.light}`,
                '&:hover': {
                  boxShadow: `0px 4px 20px ${theme.palette.primary.light}40`,
                }
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 2,
                borderBottom: `2px solid ${theme.palette.primary.light}`,
                pb: 1
              }}>
                <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                  {category.icon}
                </ListItemIcon>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    flexGrow: 1
                  }}
                >
                  {category.category}
                </Typography>
              </Box>
              
              <List sx={{ 
                flexGrow: 1, 
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  background: theme.palette.background.default,
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: theme.palette.primary.light,
                  borderRadius: '4px',
                  '&:hover': {
                    background: theme.palette.primary.main,
                  }
                }
              }}>
                {category.commands.map((cmd, index) => (
                  <ListItem 
                    key={index}
                    sx={{ 
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      mb: 2,
                      p: 2,
                      borderRadius: 1,
                      backgroundColor: theme.palette.background.default,
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                        transform: 'translateX(5px)',
                        transition: 'transform 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      width: '100%',
                      justifyContent: 'space-between'
                    }}>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          color: theme.palette.primary.main,
                          fontWeight: 'bold',
                          mb: 1,
                          fontFamily: 'monospace',
                          fontSize: '0.9rem',
                          wordBreak: 'break-word',
                          flexGrow: 1
                        }}
                      >
                        {cmd.command}
                      </Typography>
                      <Tooltip title={copiedCommand === cmd.command ? "¡Copiado!" : "Copiar comando"}>
                        <IconButton
                          size="small"
                          onClick={() => handleCopyCommand(cmd.command)}
                          sx={{ 
                            color: copiedCommand === cmd.command 
                              ? theme.palette.success.main 
                              : theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: theme.palette.action.hover
                            }
                          }}
                        >
                          {copiedCommand === cmd.command ? <CheckIcon /> : <ContentCopyIcon />}
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary', 
                        mb: 1,
                        fontSize: '0.85rem'
                      }}
                    >
                      {cmd.description}
                    </Typography>
                    {cmd.example && (
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: theme.palette.secondary.main,
                          fontFamily: 'monospace',
                          display: 'block',
                          mt: 1,
                          backgroundColor: theme.palette.background.paper,
                          p: 1,
                          borderRadius: 1,
                          fontSize: '0.75rem',
                          wordBreak: 'break-word'
                        }}
                      >
                        {cmd.example}
                      </Typography>
                    )}
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GitCommands; 