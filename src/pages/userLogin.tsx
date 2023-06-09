import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/Copyright';
import { getSignIn } from '../helpers/handleSubmit';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH } from '../store/actions';
import Selector from '../store/Selector';
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export const UserLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector(Selector.getAuthState)
  const authLoading = useSelector(Selector.getAuthLoadingState)
  const error = useSelector(Selector.getErrorState)
  console.log(authLoading)

  return (
    <ThemeProvider  theme={theme}  >
      <Container style={{margin: '2rem', border: '1px solid black', borderRadius: '10px', backgroundColor: 'white'}} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
            <Typography margin={1} fontSize={40} fontFamily={'brand'}>Luxor Inn and Suites</Typography>
          
          <Typography component="h3" variant="h6">
            Sign in
          </Typography>
          <Box component="form" onSubmit={getSignIn(dispatch, navigate)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {error && <Typography className='text-red-600'>Invalid Credentials</Typography> }
            <Button
              type="submit"
              fullWidth
              
              style={{backgroundColor: 'black', color: 'white'}}
              className='bg-black'
              sx={{ mt: 3, mb: 2 }}
            >
              {authLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}