import React from 'react';
import { Container, Typography, Grid, Paper, AppBar, Toolbar } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
             <AppBar position="static"> {/* Add the AppBar */}
                <Toolbar>
                    {/* Add Navbar content here */}
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
            <StyledContainer>
                <Typography variant="h2" gutterBottom>
                    About Us
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <Typography variant="h4" gutterBottom>
                                Our University Management System
                            </Typography>
                            <Typography paragraph>
                                Welcome to the University Management System, your one-stop solution for efficient
                                management of academic processes, administrative tasks, and student information.
                                Our system is designed to streamline university operations, improve communication,
                                and provide data-driven insights for better decision-making.
                            </Typography>
                            <Typography paragraph>
                                Features of our system include student enrollment, attendance tracking, grade management,
                                course scheduling, faculty administration, and much more. We are committed to helping
                                universities operate more effectively and enhance the educational experience for students.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <Typography variant="h4" gutterBottom>
                                Achievement
                            </Typography>
                            <Typography paragraph>
                                I have dedicated time and I have worked tirelessly to create
                                this system. I am passionate about education and technology, and our goal is to
                                make university management simpler and more efficient.
                            </Typography>
                            
                        </Paper>
                    </Grid>
                </Grid>
            </StyledContainer>

        </div>
    );
};

const StyledContainer = styled(Container)`
  padding: 20px;
`;

export default AboutUs;
