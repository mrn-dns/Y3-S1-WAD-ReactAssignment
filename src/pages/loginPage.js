import React, { useState } from 'react';
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
import { auth } from '../firebase/firebase';
import WavingHandIcon from '@mui/icons-material/WavingHand';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea', // Purple color
    },
  },
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbarInfo, setSnackbarInfo] = useState({ open: false, severity: "success", message: "" });
  const navigate = useNavigate();

  const handleSnackClose = () => {
    setSnackbarInfo({ ...snackbarInfo, open: false });
  };

  const handleSignIn = async () => {
    setSnackbarInfo({ ...snackbarInfo, open: true, severity: "info", message: "Logging in..." });

    try {
      setError('');
      setLoading(true);

      // Sign in with email and password using Firebase
      await auth.signInWithEmailAndPassword(email, password);

      setSnackbarInfo({ open: true, severity: "success", message: "User Logged In!" });
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (err) {
      setError('Failed to sign in (email or password is incorrect!)');
      setSnackbarInfo({ open: true, severity: "error", message: "Failed to sign in!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={snackbarInfo.open}
          autoHideDuration={snackbarInfo.severity === "error" ? null : 6000}
          onClose={handleSnackClose}
        >
          <Alert onClose={handleSnackClose} severity={snackbarInfo.severity} sx={{ width: "100%" }}>
            {snackbarInfo.message}
          </Alert>
        </Snackbar>
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
            <WavingHandIcon fontSize="large" color="primary" />
          </Box>
          <Box component="form" noValidate onSubmit={(e) => { e.preventDefault(); handleSignIn(); }} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Button disabled={loading} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/users/signup" variant="body2">
                  Don't have an account? Sign up !
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Card>
    </ThemeProvider>
  );
}

