import * as React from "react";
import { Typography, TextField, Checkbox, FormControlLabel, FormGroup, Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
function LoginForm() {
    const [values, setValues] = React.useState({
        Email: "",
        password: "",
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-header">
                    <Typography variant="h3" fontWeight="semi-bold">Login</Typography>
                    <Typography color="#514B69" variant="h5 "> See your growth and get consulting support</Typography>
                </div>
                &nbsp;
                <div className="signin-with-email-description">
                    <Typography variant="h6" fontWeight="semi-bold" color="#BEBAD0" align="center"> or Sign in with email</Typography>
                </div>
                <div className="login-body">
                    <div className="login-body-form">
                        <div className="login-body-form-input"></div>
                        <div className="login-body-form-input">
                            <FormGroup>
                                <FormControl sx={{ width: "1" }} variant="outlined">
                                    <Typography variant="h6" fontWeight="semi-bold">Email</Typography>
                                    <TextField id="outlined-basic" placeholder="mail@fmail.com" variant="outlined" sx={{ borderWidth: 0, width:"100%" }} />
                                </FormControl>
                                <FormControl sx={{ width: "1" }} variant="outlined">
                                    <Typography variant="h6" fontWeight="semi-bold">Password</Typography>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? "text" : "password"}
                                        value={values.password}
                                        onChange={handleChange("password")}
                                        placeholder="Password"
                                        sx={{ borderWidth: 0, width:"100%" }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <Stack direction="row" justifyContent="space-between">
                                    <FormControlLabel control={<Checkbox value="remember" sx={{
                                        color: "#5934E8", '&.Mui-checked': {
                                            color: "#5934E8"
                                        }
                                    }} />} label="Remember me" />
                                    <Button variant="text" color="primary" sx={{ color: "#5934E8", fontWeight: "bold" }}>
                                        Forgot Password
                                    </Button>
                                </Stack>
                                <FormControl>
                                    <Button variant="contained" color="primary" sx={{ backgroundColor: "#5A34E9", borderRadius: 5 }}>
                                        Sign in
                                    </Button>
                                </FormControl>
                                &nbsp;
                                <Stack direction="row" spacing={0}>
                                    <Typography variant="body" align="center">
                                        Don't have an account?
                                    </Typography>
                                    <Button variant="text" color="primary" sx={{ color: "#5934E8", textAlign: "start" }}>
                                        Sign up
                                    </Button>
                                </Stack>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginForm;
