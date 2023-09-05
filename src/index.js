import React from 'react';
import { hydrate, render } from "react-dom";

import { LetsechoApp } from './LetsechoApp';
import './styles/style.scss';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<LetsechoApp />, rootElement);
} else {
  render(<LetsechoApp />, rootElement);
}