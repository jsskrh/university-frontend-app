import React from 'react';
import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const images = [
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1581362072978-14998d01fdaa?auto=format&fit=crop&q=80&w=1884&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&q=80&w=1928&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto.format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto.format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // Add more image URLs as needed
];

const Gallery = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/AboutUs" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px' }}>
            About
          </Link>
          <Link to="/Gallery" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px' }}>
            Gallery
          </Link>
          {/* Add more links as needed */}
        </Toolbar>
      </AppBar>
      <StyledText>
        <Typography variant="h2">Gallery</Typography>
      </StyledText>
      <StyledContainer>
        <Grid container spacing={2}>
          {images.map((imageUrl, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledImage src={imageUrl} alt={`Image ${index + 1}`} />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled(Container)`
  padding: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledText = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export default Gallery;
