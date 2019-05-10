import React from 'react';

import MyServicesContainer from './MyServicesStyles';
import Icon from './../Icons/index';

const MyServices = () => (
  <MyServicesContainer data-aos="fade-up">
    <li className="service-item">
      <div className="icon-container">
        <Icon name="code" />
      </div>
      <ul className="category-list">
        <li>Front-end Development</li>
        <li>Back-end Development</li>
        <li>Testing</li>
      </ul>
    </li>
    <li className="service-item">
      <div className="icon-container">
        <Icon name="king" />
      </div>
      <ul className="category-list">
        <li>User Stories</li>
        <li>Git Workflow</li>
        <li>Product Strategy</li>
      </ul>
    </li>
    <li className="service-item">
      <div className="icon-container">
        <Icon name="measurement" />
      </div>
      <ul className="category-list">
        <li>UI/UX Design</li>
        <li>Responsive Design</li>
        <li>Mobile Design</li>
      </ul>
    </li>
  </MyServicesContainer>
);

export default MyServices;
