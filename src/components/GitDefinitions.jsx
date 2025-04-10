import { 
  Box, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  ListItemText,
  useTheme
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import GroupIcon from '@mui/icons-material/Group';
import TimelineIcon from '@mui/icons-material/Timeline';
import SecurityIcon from '@mui/icons-material/Security';

const definitions = [
  {
    title: '¿Qué es Git?',
    icon: <CodeIcon />,
    content: 'Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear cambios en el código fuente durante el desarrollo de software. Fue creado por Linus Torvalds en 2005.',
    features: [
      'Control de versiones distribuido ya que cada persona que clona un repositorio tiene una copia completa del historial del proyecto',
      'Basado en snapshots, (no diferencias) sino como una fotografía completa del proyecto en el momento de cada commit',
      'Ramas (branches) para desarrollo paralelo',
      'Historial completo de cambios',
      'Integridad de datos y de cambios a partir de hashes (identificadores únicos para cada commit)'
    ]
  },
  {
    title: '¿Qué es GitHub?',
    icon: <StorageIcon />,
    content: 'GitHub es una plataforma de alojamiento de código basada en la web que utiliza Git para el control de versiones. Proporciona una interfaz gráfica para gestionar repositorios y colaborar en proyectos.',
    features: [
      'Guardar y gestionar tu código fuente (repositorios)',
      'Controlar versiones con Git (saber quién cambió qué y cuándo)',
      'Colaborar con otras personas (comentarios, revisiones, pull requests)',
      'Publicar proyectos de código abierto o privado',
      'Automatizar tareas como pruebas, despliegues, etc. con GitHub Actions'
    ]
  },
  {
    title: 'Conceptos Clave',
    icon: <GroupIcon />,
    content: 'Para entender Git y GitHub, es importante conocer algunos conceptos fundamentales:',
    features: [
      'Repositorio: Directorio donde Git rastrea los cambios',
      'Commit: Punto de guardado en el historial',
      'Branch: Línea de desarrollo independiente',
      'Merge: Combinación de cambios de diferentes ramas',
      'Pull Request: Solicitud para integrar cambios'
    ]
  },
  {
    title: 'Flujo de Trabajo',
    icon: <TimelineIcon />,
    content: 'El flujo de trabajo típico en Git y GitHub incluye:',
    features: [
      'Clonar un repositorio existente',
      'Crear una rama para nuevas características',
      'Hacer cambios y commits',
      'Subir cambios a GitHub',
      'Crear un Pull Request para revisión'
    ]
  },
  {
    title: 'Beneficios',
    icon: <SecurityIcon />,
    content: 'Usar Git y GitHub ofrece numerosas ventajas:',
    features: [
      'Trabajo colaborativo eficiente',
      'Historial detallado de cambios',
      'Facilidad para revertir cambios',
      'Desarrollo en paralelo',
      'Backup automático del código'
    ]
  }
];

const GitDefinitions = () => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ color: theme.palette.primary.main }}
      >
        Definiciones de Git y GitHub
      </Typography>
      <Typography 
        variant="body1" 
        paragraph
        sx={{ color: theme.palette.secondary.main }}
      >
        A continuación encontrarás una explicación detallada de los conceptos fundamentales
        de Git y GitHub, junto con sus características principales.
      </Typography>

      {definitions.map((definition, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            mb: 3,
            p: 3,
            border: `1px solid ${theme.palette.primary.light}`,
            '&:hover': {
              boxShadow: `0px 4px 20px ${theme.palette.primary.light}40`,
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
              sx={{
                color: theme.palette.primary.main,
                mr: 2,
                '& .MuiSvgIcon-root': {
                  fontSize: '2rem'
                }
              }}
            >
              {definition.icon}
            </Box>
            <Typography 
              variant="h5" 
              sx={{ 
                color: theme.palette.secondary.main,
                fontWeight: 'bold'
              }}
            >
              {definition.title}
            </Typography>
          </Box>

          <Typography 
            variant="body1" 
            paragraph
            sx={{ color: 'text.primary' }}
          >
            {definition.content}
          </Typography>

          <List>
            {definition.features.map((feature, featureIndex) => (
              <ListItem key={featureIndex}>
                <ListItemText
                  primary={
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: theme.palette.primary.main,
                        fontWeight: 'medium'
                      }}
                    >
                      {feature}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </Box>
  );
};

export default GitDefinitions; 