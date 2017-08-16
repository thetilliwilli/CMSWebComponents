import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Component from './Component/creationTimeRanger.jsx';

import components from "./AllComps.js";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import MainLayout from "./MainLayout.jsx";
import AllComponentsList from "./AllComponentsList.jsx";

// const CurrentComponent = p=>(<Route>);

const Routing = ({ children }) => {
  return (
      <Switch>
          <Route path="/creationTimeRanger" component={components.CreationTimeRanger}></Route>
          <Route path="/exhibitCard" component={components.ExhibitCard}></Route>
          <Route path="/langSelector" component={components.LangSelector}></Route>
          <Route path="/staticFieldsList" component={components.StaticFieldsList}></Route>
          <Route path="/titleHeader" component={components.TitleHeader}></Route>
      </Switch>
  );
};

const App = (p) => (
  <MuiThemeProvider>
    <MainLayout leftBar={AllComponentsList} content={Routing}/>
  </MuiThemeProvider>
);



window.addEventListener("load", () => {
  var appRoot = document.createElement("div");
  appRoot.id = "appRoot";
  document.body.appendChild(appRoot);

  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('appRoot'));
});

function CompContainer(props) {
  return <div style={{ width: "30%", margin: 50, border: "2px solid slategrey" }}>{props.children}</div>;
};