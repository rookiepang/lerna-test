import React from 'react';
import ReactDOM from 'react-dom';

const containerDom = document.createElement('div');

ReactDOM.render(
    // <BDBanner background='blue'>
    //     这里是文档
    // </BDBanner>,
    <div>这里是文档</div>,
    document.body.appendChild(containerDom)
)