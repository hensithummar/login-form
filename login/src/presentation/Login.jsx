import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  TextField,
  Checkbox,
  InputAdornment,
  Typography,
} from "@mui/material";
import { attribute } from "../description/form.description";
import LoginContainer from "../container/login.container";

const Login = () => {
  const { handleSubmit, handleChange, handleCheck, formData, error } =
    LoginContainer();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 4,
        p: 4,
      }}
    >
      <Typography
        sx={{
          mb: 2,
          color: "primary.main",
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      >
        Login Form
      </Typography>
      <Typography
        sx={{
          mb: 4,
          color: "text.secondary",
        }}
      >
        Login here Using Email & Password
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {attribute?.map((att, index) => {
          const { name, label, type, icon } = att;
          return (
            <div key={index} sx={{ width: "100%" }}>
              <TextField
                error={!!error?.[name]}
                name={name}
                id={`${name}-${index}`}
                label={label}
                type={type}
                value={formData?.[name]}
                placeholder={label}
                helperText={error?.[name]}
                onChange={(e) => handleChange(e)}
                sx={{ mb: 2, width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  ),
                }}
              />
            </div>
          );
        })}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Checkbox sx={{ mr: 1 }} onChange={handleCheck} />
          <span sx={{ fontSize: "0.8rem" }}>Remember me</span>
        </Box>
        <Button type="submit" variant="contained" sx={{ width: "15%" }}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
