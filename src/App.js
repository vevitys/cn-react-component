import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from './component/Button';
import ToastView from './component/Toast';
import { Toast  } from 'antd-mobile';
import './styles/index.scss';

const App = () => {
  const show = () => {
    ToastView.show({
      content: 'hahahaha',
      position: 'bottom',
    })
  }

  const show2 = () => {
    Toast.show({
      content: 'and hhhh'
    })
  }

  
  return (
    <div className="App">
      {/* <Toast content="asanasd sad ads"/> */}
      <Button btnType="primary" onClick={show} href='https://www.baidu.com'>button</Button>
      <Button btnType="primary" onClick={show2} href='https://www.baidu.com'>button</Button>
      <Button btnType={'link'} disabled href='https://www.baidu.com'>button</Button>
      <div>test app</div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
,document.getElementById('root'));
