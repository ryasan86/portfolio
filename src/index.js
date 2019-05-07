import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Providers from './providers';
import App from './App';

AOS.init({ duration: 800, easing: 'slide' });

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root'),
);
