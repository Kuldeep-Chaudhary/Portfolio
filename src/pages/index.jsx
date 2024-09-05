import React, { useEffect, useState } from 'react';
import { Container, Button, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import Video from '../components/video';
import PageLoader from '../components/PageLoader';
import LeftSidebar from '../components/leftSidebar';
import GlobalColor from '../components/globalColor';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <>
    {loading && <PageLoader />}
    <Video/>
    <LeftSidebar/>
    <GlobalColor/>


    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" component={RouterLink} to="/">
          <Typography variant="h6">MyApp</Typography>
        </IconButton>
        <div style={{ marginLeft: 'auto' }}>
          <Button color="inherit">
            <Link to="section1" smooth={true} duration={500}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="section2" smooth={true} duration={500}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="section3" smooth={true} duration={500}>
              Resume
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="section4" smooth={true} duration={500}>
              Services
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="section5" smooth={true} duration={500}>
              Skills
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="section6" smooth={true} duration={500}>
              Portfolio
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="section7" smooth={true} duration={500}>
              Testimonial
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="section8" smooth={true} duration={500}>
              Contact
            </Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>

    {/* <Container>
      <Element name="section1" className="section">
        <Typography variant="h2" gutterBottom>
          Section 1
        </Typography>
        <Typography variant="body1">
          Content for section 1...
        </Typography>
      </Element>

      <Element name="section2" className="section">
        <Typography variant="h2" gutterBottom>
          Section 2
        </Typography>
        <Typography variant="body1">
          Content for section 2...
        </Typography>
      </Element>

      <Element name="section3" className="section">
        <Typography variant="h2" gutterBottom>
          Section 3
        </Typography>
        <Typography variant="body1">
          Content for section 3...
        </Typography>
      </Element>
      <Element name="section4" className="section"></Element>
      <Element name="section5" className="section"></Element>
      <Element name="section6" className="section"></Element>
      <Element name="section7" className="section"></Element>
      <Element name="section8" className="section"></Element>
    </Container> */}
    </>
  );
}

export default Home;
