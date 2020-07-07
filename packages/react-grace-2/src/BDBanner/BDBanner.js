import React from 'react';
import './BDBanner.css';

export const BDBanner = props => (
  <div>
    <h1>公共组件</h1>
    <div className={props.background}>{props.children}</div>
  </div>
);
