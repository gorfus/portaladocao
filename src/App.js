import React, { Component } from 'react';
import base, { storage } from './data/base'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Paginas para rotas
import Header from './components/Header'

import Adote from './components/Adote'
import AdoteDetalhes from './components/AdoteDetalhes'
import NovoAnimal from './components/NovoAnimal'
import Home from './website/Home'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "animais": {}
    }

    base.bindToState('bichosadocao', {
      context: this,
      state: 'animais'
    })
  }

  render() {
    return (
      <Router >

        <div className="">
          <Header />

          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/adote" render={() => <Adote animais={this.state.animais} />} />
          <Route exact path='/adote/adotedetalhes/:idAnimal' component={AdoteDetalhes} />
          <Route exact path='/novoAnimal' component={NovoAnimal} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
