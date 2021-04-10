import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Page from "src/Components/Page";
import authProvider from "../../Providers/AuthProvider";
import useAPIError from "../../Hooks/useAPIError";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { addError } = useAPIError();
  const handleSignup = async (values) => {
    const { data, error } = await authProvider.register(values);
    if (error) {
      addError(error.details, error.code);
    } else {
      navigate("/login", { replace: true });
    }
  };

  return (
    <Page className={classes.root} title="Register">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: "",
              first_name: "",
              last_name: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              first_name: Yup.string()
                .max(255)
                .required("First name is required"),
              last_name: Yup.string()
                .max(255)
                .required("Last name is required"),
              password: Yup.string()
                .max(255)
                .required("password is required"),
            })}
            onSubmit={handleSignup}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Create new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.first_name && errors.first_name)}
                  fullWidth
                  helperText={touched.first_name && errors.first_name}
                  label="First name"
                  margin="normal"
                  name="first_name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.first_name}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.last_name && errors.last_name)}
                  fullWidth
                  helperText={touched.last_name && errors.last_name}
                  label="Last name"
                  margin="normal"
                  name="last_name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.last_name}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Have an account?{" "}
                  <Link component={RouterLink} to="/login" variant="h6">
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
