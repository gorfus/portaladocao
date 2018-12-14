import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


class AdoteCard extends Component {

    render() {
        const animal = this.props.animal.animal
        return (
            <div className="adopt-card col-lg-3 res-margin ">
                <div className="card bg-light-custom ">
                    <div className="thumbnail text-center ">
                        <img src={animal.fotoPrincipal} className="border-irregular1 img-fluid" alt="" />
                        <div className="caption-adoption ">
                            <h6 className="adoption-header">{animal.nome}</h6>
                            <ul className="list-unstyled">
                                <li><strong>Sexo:</strong> {animal.sexo}</li>
                                <li><strong>Idade:</strong> {animal.idade}</li>
                            </ul>
                            <div className="text-center">
                                <Link to={`/adote/adotedetalhes/${animal.id}`} className="btn btn-primary">{animal.nome}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdoteCard