import { React, useState } from "react";
import Credential from "../../service/Credential";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://google.com/">
        winklix.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [loginDetals, setloginDetals] = useState({
    useremail: "",
    password: "",
  });
  const [loginerr, setloginerr] = useState(false);

  const loginhandler = (e) => {
    const value = e.target.value;
    setloginDetals({ ...loginDetals, [e.target.name]: value });
  };

  const submitform = (e) => {
    e.preventDefault();
    const fetchAPi = async () => {
      try {
        const response = await Credential.loginuserAPI(loginDetals);
        if (response.data.status == "false") {
          setloginerr(true);
          console.log("Invalid username or password");
        } else {
          const token = response.data.token;
          Credential.loginUserInFrontEnd(token);
          window.location.href = "/";
          console.log("Token: ", token);
        }
      } catch (e) {
        console.log(e);
        
      }
    };
    fetchAPi();
  };

  return (
    <div>
      {loginerr ? (
        <>
         <div className="container alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Wrong credential</strong> Wrong UserEmail or password
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
        </>
      ) : (
        <></>
      )}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="useremail"
                onChange={(e) => {
                  loginhandler(e);
                }}
                label="Email Address"
                name="useremail"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                onChange={(e) => {
                  loginhandler(e);
                }}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                onClick={submitform}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
