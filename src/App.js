import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return (
    <BrowserRouter >
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/shop' component={ ShopPage } />
          <Route exact path='/signin' component={ SignInAndSignUpPage } />
          <Route exact path='/signup' component={ SignInAndSignUpPage } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
