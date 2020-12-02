import React from 'react';
import Router from './Router'
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
// import { RecoilRoot } from "recoil";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <RecoilRoot> */}
      <Router />
    {/* </RecoilRoot> */}
  </React.StrictMode>,
  document.getElementById("root")
);