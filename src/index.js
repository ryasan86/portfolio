import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Providers from './providers';
import App from './App';
import { loaderDelay } from './constants';

setTimeout(() => AOS.init({ duration: 800, easing: 'slide' }), loaderDelay + 500);

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root')
);
