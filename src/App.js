import React, { Component } from 'react';
import base, { storage } from './data/base'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Paginas para rotas
import Header from './components/Header'

import Home from './components/Home'
import Adote from './components/Adote'
import AdoteDetalhes from './components/AdoteDetalhes'
import NovoAnimal from './components/NovoAnimal'
// import MyDropzone from './components/MyDropzonenpm '

//dados
import animais from './data/animais.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "animais": []
    }

    
    base.bindToState('bichosadocao', {
      context: this,
      state: 'animais'
    })
  }

  render() {
    return (
      <Router >
        <div className="container">
          <Header />
        
          <br/>
          <br/>
          <Route exact path="/" exact render={() => <Home />} />
          <Route exact path="/adote"  render={() => <Adote animais={this.state.animais} />} />
          <Route exact path='/adote/adotedetalhes/:idAnimal' component={AdoteDetalhes} />
          <Route exact path='/novoAnimal' component={NovoAnimal} />
        </div>
      </Router>
    );
  }
}

export default App;
