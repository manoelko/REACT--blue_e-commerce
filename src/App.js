import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Modal from './components/Modal';
import NotFound from './components/NotFound';

function App() {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route component={NotFound} />
            </Switch>
            <Modal></Modal>
        </React.Fragment>
    );
}

export default App;
