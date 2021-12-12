import React from 'react';
import ReactDOM from 'react-dom';

import { LetsechoApp } from './LetsechoApp';
import './styles/style.scss';

ReactDOM.hydrate(
  <React.StrictMode>
    <LetsechoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
