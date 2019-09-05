import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import withAuth from "./withAuth";
import Home from "./Home";
import Secret from "./Secret";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthLayout from "./components/AuthLayout";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Switch>
          <Route path="/" exact component={withAuth(Home)} />
          <Route path="/secret" component={withAuth(Secret)} />
          <AuthLayout>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </AuthLayout>
        </Switch>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
