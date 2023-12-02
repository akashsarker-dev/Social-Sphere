import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Card, InputAdornment } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../../slices/UserSlices";

const defaultTheme = createTheme();

export default function Login() {
  const auth = getAuth();
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState();

  const [emailError, setEmailError] = React.useState();
  const [passwordError, setPasswordError] = React.useState();

  
  const handleEmail =(e)=>{
    setEmail(e.target.value);
    setEmailError('')
  }

  const handlePassword =(e)=>{
    setPassword(e.target.value);
    setPasswordError('')
  }



  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError('Please Enter You Email')
    }
    if (!password) {
      setPasswordError('Please Enter You Password')
    }
    if (email && password) {
    signInWithEmailAndPassword(auth, email, password)
  .then((user) => {
    // console.log(user, 'sdfshdfhdhf');
    setEmail('')
    setPassword('')

    toast.success('Login Success', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

      dispatch(userLoginInfo(user.user))
      localStorage.setItem('userLoginInfo', JSON.stringify(userLoginInfo(user)))

      setTimeout(()=>{

        navigate('/')
      },3000)
      
    
  })
  .catch((error) => {
    if(error.code.includes('auth/invalid-credential')){
      setPasswordError('Email & Password Not Match')
    }
   
  });
    }


  //   signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   const user = userCredential.user;
  // })
  // .catch((error) => {
  //   console.log(error.code);
  // });
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Card sx={{ maxWidth: 400, py:5 , mx:'auto', marginTop:'60px'}}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
      <Container component="main" >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }} >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
            <TextField onChange={handleEmail}
              margin="normal"required fullWidth
              id="email" label="Email Address"
              value={email} autoComplete="email" autoFocus/>
              {
                emailError && 
              <Typography sx={{ color: 'error.main' }} variant="p">
            {emailError}
          </Typography> }

            <TextField onChange={handlePassword}
              fullWidth margin="normal" value={password}
              label="Password" type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {showPassword ? (
                      <VisibilityOffIcon
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end" ></VisibilityOffIcon>
                    ) : (
                      <RemoveRedEyeIcon
                        onClick={() => setShowPassword(!showPassword)}
                      ></RemoveRedEyeIcon>
                    )}
                  </InputAdornment>
                ),
              }}/>
              {
                passwordError && 
              <Typography sx={{ color: 'error.main' }} variant="p">
            {passwordError}
          </Typography>
              }
            <Grid item xs>
              <Link  variant="body2">
                Forgot password?
              </Link>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Typography sx={{ display: "flex", justifyContent: "center" }}>
                Don't have an account?
                <Link to='/signup'  variant="body2">
                  Sign Up
                </Link>
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Container>
      </Card>
    </ThemeProvider>
  );
}
