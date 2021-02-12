import "fontsource-raleway/500.css";

// Provides the Navigation Bar for the app.
import {
    AppBar,
    Button,
    Container,
    Menu,
    MenuItem,
    Toolbar,
    useScrollTrigger
} from "@material-ui/core";
import React, { useState } from "react";

import axios from "axios";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
    background: ${({ top }) => (top ? "#000e1ce3" : "transparent")};
    backdrop-filter: blur(10px);
    transition: 250ms;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    /* & > .MuiToolbar-gutters {
        padding-left: 5rem;
        padding-right: 5rem;
    } */
`;

const Title = styled.h1`
    flex-grow: 1;
    font-family: Raleway;
    font-weight: 500;
`;

const MenuContainer = styled.div`
    & > a, & > button {
        color: white;
        text-transform: none;
        margin: 0rem 0.5rem;
    }
`;

const NavBar = ({ authenticated: isAuthenticated, name, maxWidth }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const openDialog = event => {
        setAnchorEl(event.currentTarget);
    };

    const closeDialog = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        axios.post("/logout").then(response => {
            window.location = "/";
        });
    };

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 20
    });

    return (
        <StyledAppBar
            position="sticky"
            top={trigger}
            elevation={trigger ? 4 : 0}
        >
            <Container maxWidth={maxWidth}>
                <Toolbar disableGutters>
                    <Title>covidtrack</Title>
                    <MenuContainer>
                        <Button>Home</Button>
                        <Button>COVID-19 Info</Button>
                        {isAuthenticated ? (
                            <>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={openDialog}
                                >
                                    {name}
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right"
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right"
                                    }}
                                    onClose={closeDialog}
                                >
                                    <MenuItem
                                        component="a"
                                        href="/user/profile"
                                    >
                                        My account
                                    </MenuItem>
                                    <MenuItem
                                        component="button"
                                        type="submit"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <>
                                <Button href="/register">Register</Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    href="/login"
                                >
                                    Login
                                </Button>
                            </>
                        )}
                    </MenuContainer>
                </Toolbar>
            </Container>
        </StyledAppBar>
    );
};

export default NavBar;
