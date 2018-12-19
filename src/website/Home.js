import React, { Component } from 'react'

//Componentes
import SliderHome from './SliderHome'
import ComoAjudar from './ComoAjudar'
import GabrielPensadorMsg from './GabrielPensadorMsg'
import Contadores from './Contadores'
import Depoimentos from './Depoimentos'
import CadastrarGrupo from './CadastrarGrupo'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div>
                <SliderHome />
                <ComoAjudar />  
                <GabrielPensadorMsg />
                <Contadores /> 
                <CadastrarGrupo />
                <Depoimentos /> 
            </div>
        )
    }
}

export default Home