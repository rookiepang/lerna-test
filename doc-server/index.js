import React from 'react';
import ReactDOM from 'react-dom';
import { BDBanner } from 'react-grace-2';

const containerDom = document.createElement('div');

ReactDOM.render(
    <BDBanner background='blue'>
        这里是文档
    </BDBanner>,
    document.body.appendChild(containerDom)
)