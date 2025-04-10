import { 
  Box, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  ListItemText,
  ListItemIcon,
  useTheme,
  Grid
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';
import BuildIcon from '@mui/icons-material/Build';
import ExtensionIcon from '@mui/icons-material/Extension';

const tools = [
  {
    category: 'Editores de Código',
    icon: <CodeIcon />,
    items: [
      {
        name: 'Visual Studio Code',
        description: 'Editor de código fuente desarrollado por Microsoft. Incluye soporte para depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, snippets y refactorización de código.',
        features: [
          'Extensiones para múltiples lenguajes',
          'Integración con Git',
          'Terminal integrada',
          'Depuración integrada',
          'Personalización extensiva'
        ]
      }
    ]
  },
  {
    category: 'Control de Versiones',
    icon: <StorageIcon />,
    items: [
      {
        name: 'Git',
        description: 'Sistema de control de versiones distribuido para rastrear cambios en el código fuente durante el desarrollo de software.',
        features: [
          'Control de versiones distribuido',
          'Ramas para desarrollo paralelo',
          'Historial completo de cambios',
          'Trabajo sin conexión'
        ]
      },
      {
        name: 'GitHub Desktop',
        description: 'Aplicación de escritorio que permite interactuar con GitHub usando una interfaz gráfica en lugar de la línea de comandos.',
        features: [
          'Interfaz gráfica intuitiva',
          'Visualización de cambios',
          'Gestión de ramas',
          'Sincronización con GitHub'
        ]
      }
    ]
  },
  {
    category: 'Terminal y Línea de Comandos',
    icon: <TerminalIcon />,
    items: [
      {
        name: 'Bash',
        description: 'Shell de Unix y lenguaje de comandos, comúnmente utilizado en sistemas Linux y macOS.',
        features: [
          'Scripting potente',
          'Autocompletado',
          'Historial de comandos',
          'Alias personalizados'
        ]
      },
      {
        name: 'PowerShell',
        description: 'Shell de línea de comandos y lenguaje de scripting desarrollado por Microsoft.',
        features: [
          'Integración con .NET',
          'Pipeline de objetos',
          'Cmdlets personalizables',
          'Soporte multiplataforma'
        ]
      }
    ]
  },
  {
    category: 'Lenguajes y Frameworks',
    icon: <LanguageIcon />,
    items: [
      {
        name: 'React',
        description: 'Biblioteca de JavaScript para construir interfaces de usuario. Permite crear componentes reutilizables y manejar el estado de la aplicación de manera eficiente.',
        features: [
          'Componentes reutilizables',
          'Virtual DOM para mejor rendimiento',
          'Hooks para manejo de estado',
          'JSX para sintaxis declarativa',
          'Ecosistema extenso de herramientas'
        ]
      },
      {
        name: 'Material-UI (MUI)',
        description: 'Biblioteca de componentes de React que implementa el diseño Material Design de Google. Proporciona componentes pre-construidos y personalizables.',
        features: [
          'Componentes pre-construidos',
          'Sistema de temas personalizable',
          'Diseño responsivo',
          'Accesibilidad integrada',
          'Documentación completa'
        ]
      },
      {
        name: 'Vite',
        description: 'Herramienta de construcción moderna para aplicaciones web. Ofrece un servidor de desarrollo rápido y una optimización de compilación eficiente.',
        features: [
          'Servidor de desarrollo ultra rápido',
          'Compilación optimizada',
          'Soporte nativo para ES modules',
          'Configuración mínima',
          'Integración con múltiples frameworks'
        ]
      }
    ]
  }
];

const DevelopmentTools = () => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto', p: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ color: theme.palette.primary.main }}
      >
        Herramientas de Desarrollo
      </Typography>
      <Typography 
        variant="body1" 
        paragraph
        sx={{ color: theme.palette.secondary.main }}
      >
        Conoce las herramientas esenciales para el desarrollo de software y el control de versiones.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {tools.map((category) => (
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
                {category.items.map((item, index) => (
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
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: theme.palette.primary.main,
                        fontWeight: 'bold',
                        mb: 1,
                        fontSize: '0.9rem'
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary', 
                        mb: 1,
                        fontSize: '0.85rem'
                      }}
                    >
                      {item.description}
                    </Typography>
                    <List dense sx={{ width: '100%' }}>
                      {item.features.map((feature, featureIndex) => (
                        <ListItem 
                          key={featureIndex}
                          sx={{ 
                            py: 0.5,
                            '&:hover': {
                              backgroundColor: 'transparent'
                            }
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <ExtensionIcon 
                              sx={{ 
                                fontSize: '0.8rem',
                                color: theme.palette.secondary.main 
                              }} 
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography 
                                variant="caption"
                                sx={{ 
                                  color: theme.palette.secondary.main,
                                  fontSize: '0.75rem'
                                }}
                              >
                                {feature}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
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

export default DevelopmentTools; 