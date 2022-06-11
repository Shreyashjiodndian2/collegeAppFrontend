import * as React from "react";
import { Typography, TextField, Checkbox } from "@mui/material";
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
                    <Typography variant="h2">Login</Typography>
                </div>
                <div className="login-description">
                    <Typography> See your growth and get consulting support</Typography>
                </div>
                <div className="social-media-login">
                    <h4>G</h4>
                </div>
                <div className="signin-with-email-description">
                    <h6>Sign in with email</h6>
                </div>
                <div className="login-body">
                    <div className="login-body-form">
                        <div className="login-body-form-input"></div>
                        <div className="login-body-form-input">
                            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">
                                    Email
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    value={values.Email}
                                    onChange={handleChange("Email")}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? "text" : "password"}
                                    value={values.password}
                                    onChange={handleChange("password")}
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
                                    label="Password"
                                />
                            </FormControl>
                        </div>
                        <div className="remember-me-forgot-password">
                            <div className="remember-me">
                                <Checkbox defaultChecked={true} color="primary" />
                                <Typography>Remember me</Typography>
                            </div>
                        </div>
                        <div className="login-body-form-input">
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginForm;
