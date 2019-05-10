import React from 'react';

import MyServicesContainer from './MyServicesStyles';
import Icon from './../Icons/index';
import theme from '../../styles/theme';

const MyServices = () => (
  <MyServicesContainer data-aos="fade-up">
    <li className="service-item">
      <Icon name="code" width={25} fill={theme.primary} />
      <ul className="category-list">
        <li>Front-end Development</li>
        <li>Back-end Development</li>
        <li>Testing</li>
      </ul>
    </li>
    <li className="service-item">
      <Icon name="code" width={25} fill={theme.primary} />
      <ul className="category-list">
        <li>Product Strategy</li>
        <li>Code Sprints</li>
        <li>Design Strategy</li>
      </ul>
    </li>
    <li className="service-item">
      <Icon name="code" width={25} fill={theme.primary} />
      <ul className="category-list">
        <li>UI/UX Design</li>
        <li>Responsive Design</li>
        <li>Mobile Design</li>
      </ul>
    </li>
  </MyServicesContainer>
);

export default MyServices;
