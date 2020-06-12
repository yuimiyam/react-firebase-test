import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Lawyers from './components/lawyers';
import Welcome from './components/welcome';
import InputForm from './components/InputForm';

const App = () => {
  const issues = ['開示請求', '離婚', 'パワハラ・セクハラ'];
  return (
    <BrowserRouter>
      <div>
        <Link to='/'>
          <h1>相談相手さがせる君</h1>
        </Link>
        <ul>
          <li><Link to= '/kaiji'>開示請求に強い弁護士</Link></li>
          <li><Link to= 'rikon'>離婚訴訟に強い弁護士</Link></li>
          <li><Link to= '/harassment'>セクハラ・パワハラに強い弁護士</Link></li>
          <li><Link to= '/input'>【パートナー弁護士様用】入力フォーム</Link></li>
        </ul>
        <hr/>
        <Route exact path='/' component = {Welcome} />
        <Route
          path='/kaiji'
          render = 
            {props =>
              <Lawyers issue={issues[0]} /> 
            }   
        />
        <Route
          path='/rikon'
          render = 
            {props =>
              <Lawyers issue={issues[1]} /> 
            }   
        />
        <Route
          path='/harassment'
          render = 
            {props =>
              <Lawyers issue={issues[2]} /> 
            }   
        />
        <Route exact path='/input' component = {InputForm} />
      </div>

    </BrowserRouter>
  );
}
export default App;