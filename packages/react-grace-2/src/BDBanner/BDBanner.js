import React from 'react';
import './BDBanner.css';

export const BDBanner = props => (
  <div>
    <h2>公共组件</h2>
    <div className={props.background}>{props.children}</div>
  </div>
);
