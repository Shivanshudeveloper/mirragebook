import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PersonIcon from '@mui/icons-material/Person';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Container from '@mui/material/Container';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const theme = createTheme();

const UserProfile = () => {
    const [open, setOpen] = React.useState(false);

    const [chat, setchat] = React.useState(false);

    const [userchats, setuserchats] = React.useState([]);
    const [userchatstext, setuserchatstext] = React.useState("");



    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const addUserChat = () => {
        setuserchats([userchatstext, ...userchats]);
        setuserchatstext("");
    }


    return (
        <>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    >
                    <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Chat
                    </Typography>
                </Toolbar>
                </AppBar>
                {
                    userchats?.map((chats) => {
                        return (
                            <Stack
                                direction='row'
                                spacing={2}
                                sx={{
                                    p: 4
                                }}
                            >
                                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src="https://swall.teahub.io/photos/small/5-56214_1920x1080-wallpaper-s-collection-beautiful-girl-wallpaper-girl.jpg" />
                            
                                <Alert sx={{ width: '100%' }} severity="info">
                                    <AlertTitle>Test User</AlertTitle>
                                        {chats}
                                </Alert>
                            </Stack>
                        )
                    })
                }

                <Stack
                    direction='row'
                    spacing={2}
                    sx={{ 
                        position: 'absolute',
                        bottom: 0,
                        p: 4,
                    }} 
                >
                    <TextField
                        placeholder="Chat Here"
                        fullWidth
                        value={userchatstext}
                        onChange={(e) => setuserchatstext(e.target.value)}
                        size='large'
                        sx={{ 
                            width: '1200px'
                        }}
                    />
                    <Button
                        size='large'
                        variant='contained'
                        sx={{ 
                            width: '400px'
                        }}
                        onClick={addUserChat}
                    >
                        Send Message
                    </Button>
                </Stack>
                
                
            </Dialog>


            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Profile
                    </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            <main>
                <Container sx={{ py: 8 }} maxWidth="lg">
                    <center>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg"
                            sx={{ width: 150, height: 150 }}
                        />
                        <Typography
                            sx={{ mt: 1 }}
                            variant='h5'
                        >
                            Test User
                        </Typography>
                    </center>

                    <Button
                        sx={{ float: 'right' }}
                        variant='contained'
                        onClick={handleClickOpen}
                    >
                        Chat with them
                    </Button>
                    <br />

                    <Card
                        sx={{ mt: 4 }}
                    >
                        <CardContent>
                            <Typography
                                variant='h6'
                            >
                                Profile Details
                            </Typography>

                            <Stack sx={{ mt: 2 }} direction='row' spacing={2}>
                                <PersonIcon fontSize='large' />
                                <Typography
                                    sx={{ pt: 1 }}
                                    variant='subtitle2'
                                >
                                   user12378
                                </Typography>
                            </Stack>
                            
                            <Stack sx={{ mt: 2 }} direction='row' spacing={2}>
                                <FmdGoodIcon fontSize='large' />
                                <Typography
                                    sx={{ pt: 1 }}
                                    variant='subtitle2'
                                >
                                   India
                                </Typography>
                            </Stack>

                            <Stack sx={{ mt: 2 }} direction='row' spacing={2}>
                                <EmailIcon fontSize='large' />
                                <Typography
                                    href="google.com"
                                    sx={{ pt: 1 }}
                                    variant='subtitle2'
                                >
                                   testuser@gmail.com
                                </Typography>
                            </Stack>

                            <Stack sx={{ mt: 2 }} direction='row' spacing={2}>
                                <InstagramIcon fontSize='large' />
                                <Typography
                                    href="google.com"
                                    sx={{ pt: 1 }}
                                    variant='subtitle2'
                                >
                                   @testuser
                                </Typography>
                            </Stack>

                            <Stack sx={{ mt: 2 }} direction='row' spacing={2}>
                                <FacebookIcon fontSize='large' />
                                <Typography
                                    href="google.com"
                                    sx={{ pt: 1 }}
                                    variant='subtitle2'
                                >
                                   testuser
                                </Typography>
                            </Stack>

                            <Stack sx={{ mt: 2 }} direction='row' spacing={2}>
                                <BusinessCenterIcon fontSize='large' />
                                <Typography
                                    href="google.com"
                                    sx={{ pt: 1 }}
                                    variant='subtitle2'
                                >
                                   Apple Inc
                                </Typography>
                            </Stack>

                        </CardContent>
                    </Card>

                    <Card
                        sx={{ mt: 4 }}
                    >
                        <CardContent>
                            <Typography
                                variant='h6'
                            >
                                Biography
                            </Typography>

                            <Typography
                                variant='subtitle2'
                                sx={{ mt: 2 }}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>

                        </CardContent>
                    </Card>

                    <Card
                        sx={{ mt: 4 }}
                    >
                        <CardContent>
                            <Typography
                                variant='h6'
                            >
                                Work & Life
                            </Typography>

                            <Typography
                                variant='subtitle2'
                                sx={{ mt: 2 }}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>

                        </CardContent>
                    </Card>
                    

                </Container>
            </main>
        </>
    )
}

export default UserProfile