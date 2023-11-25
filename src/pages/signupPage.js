import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import { auth } from '../firebase/firebase';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
    },
  },
});

export default function SignUp() {
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSnackClose = () => {
    setOpen(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setOpen(true);
    const data = new FormData(e.target);

    if (data.get('password') !== data.get('passwordConfirm')) {
      return setError('Passwords do not match. Please confirm the password.');
    }

    try {
      setError('');
      setLoading(true);

      await auth.createUserWithEmailAndPassword(data.get('email'), data.get('password'));

      // Navigate after successful signup
      navigate("/");
      setOpen(true);
    } catch (error) {
      setError("Account could not be created");
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        {error && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            onClose={handleSnackClose}
          >
            <Alert onClose={handleSnackClose} severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          </Snackbar>
        )}
        {!error && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            onClose={handleSnackClose}
          >
            <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
              Created User!
            </Alert>
          </Snackbar>
        )}
      </>
      <Card sx={{ border: "2px solid #6200ea", backgroundColor: "#f0f0f0", padding: 3 }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'transparent' }}>
              <LockIcon fontSize="large" color="primary" />
            </Avatar>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="passwordConfirm"
                    label="Password Confirmation"
                    type="password"
                    id="passwordConfirm"
                    autoComplete="new-password"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Button
                disabled={loading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/users/login" variant="body2">
                    Already have an account? Log in !
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Card>
    </ThemeProvider>
  );
}


