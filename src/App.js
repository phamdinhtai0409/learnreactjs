//import logo from './logo.svg';
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import DetailProduct from "./Component/DetailProduct/DetailProduct";
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/detailproduct/:id" exact component={DetailProduct}/>
      </Switch>
    </div>
  );
}

export default App;
