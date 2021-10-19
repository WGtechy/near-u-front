import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getAllCategory } from "./redux/actions";
import { LightTheme, DarkTheme, OrangeTheme, GlobalStyles } from "./themes.js";
import PrivateRoute from "./comp-files/hoc/PrivateRoute";
import { PageLoading } from "./comp-files/hoc/Loading";

const App = () => {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const Home = React.lazy(() =>
    import("./Display/home-layout/all-screens/Home")
  );
  const ProductListPage = React.lazy(() =>
    import("./Display/home-layout/all-screens/ProductListPage")
  );



  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <Router>
      <React.Suspense fallback={PageLoading}>
        <ThemeProvider
          theme={
            theme === "light"
              ? LightTheme
              : theme === "orange"
              ? OrangeTheme
              : DarkTheme
          }
        >
          <GlobalStyles />
          <Switch>
            <Route path="/" exact name="Home" component={Home} />
            <Route path="/:slug" name="Product page" component={ProductListPage} />
          </Switch>
        </ThemeProvider>
      </React.Suspense>
    </Router>
  );
};

export default App;
