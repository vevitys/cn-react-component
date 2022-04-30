import React from 'react';
import ReactDOM from 'react-dom';
import Button from './component/Button';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Button btnType='link' href='https://www.baidu.com'>button</Button>
      <Button btnType={'link'} disabled href='https://www.baidu.com'>button</Button>
      <div>test app</div>
    </div>
  </React.StrictMode>
,document.getElementById('root'));
