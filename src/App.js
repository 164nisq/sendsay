import React from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchLogin} from "./services/sendsayApiService";
import LoginPage from "./pages/auth/LoginPage";



function App() {
    // const res = sendsay.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res) {
    //     console.log(res.list['about.id']);
    // })
    const res = fetchLogin().then((res) => console.log(res));

  return (
    <div className="App">
        <LoginPage/>
    </div>
  );
}

export default App;
