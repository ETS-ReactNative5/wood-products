import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Store from './Store';
import Info from './Info';
import ProductDetails from './ProductDetails';
import Checkout from './Checkout';
import Order from './Order';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/order'>
            <Header />
            <Order />
          </Route>
          <Route path='/product/details'>
            <Header />
            <ProductDetails />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/store/frames'>
            <Header />
            <Store items='Frames' />
          </Route>
          <Route path='/store/hiveComponents'>
            <Header />
            <Store items='HiveComponents' />
          </Route>
          <Route path='/store/beeHiveKits'>
            <Header />
            <Store items='BeeHiveKits' />
          </Route>
          <Route path='/store/bargainBarnItems'>
            <Header />
            <Store items='BargainBarnItems' />
          </Route>
          <Route path='/store/nucBoxesSupplies'>
            <Header />
            <Store items='NucBoxesSupplies' />
          </Route>
          <Route path='/contact'>
            <Header />
            <Info />
          </Route>
          <Route path='/'>
            <Header />
            <Store items='Frames' />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
