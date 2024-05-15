import React from 'react';
import { Grid, Typography, Button, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import Reveal from '../components/reveal';
import Industry1 from '../assets/Industry1.jpg';
import Industry2 from '../assets/Industry2.jpg';
import Industry3 from '../assets/Industry3.jpg';
import Industry4 from '../assets/Industry4.jpg';
import Industry5 from '../assets/Industry5.jpg';
import Industry6 from '../assets/Industry6.jpg';
import Industry7 from '../assets/Industry7.jpg';
import Industry8 from '../assets/Industry8.jpg';
import '../styles/styles.css'

const Section = () => {
  var items = [
    {
      name: "Construction & Development",
      picture: Industry1,
      position: 'bottom'
    },
    {
      name: "Education",
      picture: Industry2,
      position: 'center'
    },
    {
      name: "Energy",
      picture: Industry3,
      position: 'center'
    },
    {
      name: "Finance & Fintech",
      picture: Industry4,
      position: 'center'
    },
    {
      name: "Healthcare",
      picture: Industry5,
      position: 'center'
    },
    {
      name: "Manufacturing",
      picture: Industry6,
      position: 'center'
    },
    {
      name: "Media & Entertainment",
      picture: Industry7,
      position: 'center'
    },
    {
      name: "Public Sector",
      picture: Industry8,
      position: 'center'
    }
  ]

  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        bgcolor={'#E3C263'}
        pt={6}
      // px={{ xs: '2em', md: '10em' }}
      // spacing={4}
      // py={'10em'}
      // justifyContent="space-between"
      // alignItems="center"
      // className='ready'
      >
        <Grid item md={12} sm={12} xs={12}
          // mb={{ xs: '2em' }}
          mb={-4}
        >
          <Typography variant="h3" fontWeight={700} mb={4} textAlign={'center'}>
            INDUSTRY
          </Typography>
          <Carousel autoPlay={'false'}>
            {
              items.map((item, i) => <Item key={i} item={item} />)
            }
          </Carousel>
        </Grid>
      </Grid>

    </>
  );
};

function Item(props) {
  return (
    <Paper sx={{ backgroundImage: `url(${props.item.picture})`, backgroundSize: 'cover', backgroundPosition: props.item.position, backgroundRepeat: 'no-repeat', height: '700px' }}>
      <Grid container md={12} sm={12} xs={12} height={'100%'} alignItems="center" justifyContent="center">
        <Grid item p={1.5} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <Typography variant="h3" color={'white'}>{props.item.name}</Typography>
        </Grid>
      </Grid>
      {/* <p>{props.item.description}</p>

      <Button className="CheckButton">
        Check it out!
      </Button> */}
    </Paper>
  )
}

export default Section;