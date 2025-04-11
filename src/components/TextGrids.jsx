import { 
  Box, 
  Typography,
  Grid,
  useTheme,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';
import Mulan from '../images/cartoonCharacters/Mulan.jpg';
import Chavo from '../images/cartoonCharacters/Chavo.webp';

const gridItems = [
  {
    id: 1,
    title: 'Mulán',
    content: 'Es una mujer independiente, valiente, fuerte y con un gran sentido de la justicia lo cual me representa mucho',
    image: Mulan
  },
  {
    id: 2,
    title: 'Chavo del 8',
    content: 'Porque es traste como yo',
    image: Chavo
  },
  {
    id: 3,
    title: '3',
    content: 'Contenido del 3',
    image: null
  },
  {
    id: 4,
    title: '4',
    content: 'Contenido del 4',
    image: null
  },
  {
    id: 5,
    title: '5',
    content: 'Contenido del 5',
    image: null
  },
  {
    id: 6,
    title: '6',
    content: 'Informacion de documento 6',
    image: null
  },
  {
    id: 7,
    title: '7',
    content: 'Contenido del 7',
    image: null
  },
  {
    id: 8,
    title: '8',
    content: 'Contenido del 8',
    image: null
  },
  {
    id: 9,
    title: '9',
    content: 'Contenido del 9',
    image: null
  },
  {
    id: 10,
    title: '10',
    content: 'Contenido del 10',
    image: null
  },
  {
    id: 11,
    title: '11',
    content: 'Contenido del 11',
    image: null
  },
  {
    id: 12,
    title: '12',
    content: 'Contenido del 12',
    image: null
  },
  {
    id: 13,
    title: '13',
    content: 'Contenido del 13',
    image: null
  },
  {
    id: 14,
    title: '14',
    content: 'Contenido del 14',
    image: null
  },
  {
    id: 15,
    title: '15',
    content: 'Contenido del 15',
    image: null
  },
  {
    id: 16,
    title: '16',
    content: 'Contenido del 16',
    image: null
  },
  {
    id: 17,
    title: '17',
    content: 'Contenido del 17',
    image: null
  },
  {
    id: 18,
    title: '18',
    content: 'Contenido del 18',
    image: null
  },
  {
    id: 19,
    title: '19',
    content: 'Contenido del 19',
    image: null
  },
  {
    id: 20,
    title: '20',
    content: 'Contenido del 20',
    image: null
  },
  {
    id: 21,
    title: '21',
    content: 'Contenido del 21',
    image: null
  },
  {
    id: 22,
    title: '22',
    content: 'Contenido del 22',
    image: null
  },
  {
    id: 23,
    title: '23',
    content: 'Contenido del 23',
    image: null
  },
  {
    id: 24,
    title: '24',
    content: 'Contenido del 24',
    image: null
  },
  {
    id: 25,
    title: '25',
    content: 'Contenido del 25',
    image: null
  },
  {
    id: 26,
    title: '26',
    content: 'Contenido del 26',
    image: null
  },
  {
    id: 27,
    title: '27',
    content: 'Contenido del 27',
    image: null
  },
  {
    id: 28,
    title: '28',
    content: 'Contenido del 28',
    image: null
  },
  {
    id: 29,
    title: '29',
    content: 'Contenido del 29',
    image: null
  },
  {
    id: 30,
    title: '30',
    content: 'Contenido del 30',
    image: null
  }
];

const TextGrids = () => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto', p: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ color: theme.palette.primary.main }}
      >
        Testing interactivo
      </Typography>
      <Typography 
        variant="body1" 
        paragraph
        sx={{ color: theme.palette.secondary.main }}
      >
        Espacios para compartir su personaje animado favorito y porqué lo eligieron.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {gridItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '400px',
                mx: 'auto',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: `0px 4px 20px ${theme.palette.primary.light}40`,
                }
              }}
            >
              <Box sx={{ 
                position: 'relative', 
                width: '100%', 
                paddingTop: '100%', // Esto crea un cuadrado perfecto
                backgroundColor: theme.palette.background.default
              }}>
                {item.image && (
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      p: 2
                    }}
                  />
                )}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: 'text.primary',
                    textAlign: 'center'
                  }}
                >
                  {item.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TextGrids; 