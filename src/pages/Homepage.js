import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button, AppBar, Toolbar } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
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
                </Toolbar>
            </AppBar>

            <StyledContainer>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <img src={Students} alt="students" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledPaper elevation={3}>
                            <StyledTitle>
                                Welcome to
                                <br />
                                School Management
                                <br />
                                System
                            </StyledTitle>
                            <StyledText>
                                Streamline school management, class organization, and add students and faculty.
                                Seamlessly track attendance, assess performance, and provide feedback.
                                Access records, view marks, and communicate effortlessly.
                            </StyledText>
                            <StyledBox>
                                <StyledLink to="/choose">
                                    <LightPurpleButton variant="contained" fullWidth>
                                        Login
                                    </LightPurpleButton>
                                </StyledLink>
                                <StyledLink to="/chooseasguest">
                                    <Button variant="outlined" fullWidth
                                        sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                    >
                                        Login as Guest
                                    </Button>
                                </StyledLink>
                                <StyledText>
                                    Don't have an account?{' '}
                                    <Link to="/Adminregister" style={{ color: "#550080" }}>
                                        Sign up
                                    </Link>
                                </StyledText>
                            </StyledBox>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </StyledContainer>

            {/* Contact Us Section */}
            <ContactUsContainer>
                <StyledText>
                    Contact Us at: +44 7398704548<br />
                    +44 2356890876
                </StyledText>
            </ContactUsContainer>
        </div>
    );
};

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ContactUsContainer = styled(Container)`
  background-color: #f0f0f0;
  text-align: center;
  padding: 20px;
`;

export default Homepage;
