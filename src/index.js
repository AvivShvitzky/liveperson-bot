import React from 'react';
import Router from './Router'
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
// import { RecoilRoot } from "recoil";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLanguage, faCoins, faClock } from '@fortawesome/free-solid-svg-icons'

library.add(faLanguage, faCoins, faClock)

ReactDOM.render(
  <React.StrictMode>
    {/* <RecoilRoot> */}
      <Router />
    {/* </RecoilRoot> */}
  </React.StrictMode>,
  document.getElementById("root")
);