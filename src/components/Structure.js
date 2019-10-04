import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import ResponsiveNavBar from './ResponsiveNavBar'
import ArriendoList from './Arriendo/ArriendoList'
import ArriendoDetail from './Arriendo/ArriendoDetail'
import VentaList from './Venta/VentaList'
import VentaDetail from './Venta/VentaDetail'


import Home from './Home'

class Vista extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <ResponsiveNavBar/>
                <Route path="/" exact component={Home}/>
                <Route path="/ArriendoList" exact component={ArriendoList}/>
                <Route path="/ArriendoDetail/:idArriendo" exact component={ArriendoDetail}/>
                <Route path="/VentaList" exact component={VentaList}/>
                <Route path="/VentaDetail/:idVenta" exact component={VentaDetail}/>
            </div>
        );
    }
}

export default Vista;
