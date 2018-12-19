import React, { Component } from 'react'

class Contadores extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <section id="about" className="dog-bg2">
                    <div className="bg-light-custom block-padding">
                        <div className="container">
                            <div id="counter" className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="counter">
                                        <i className="counter-icon fa fa-users"></i>
                                        <div className="counter-value" data-count="23">0</div>
                                        <h3 className="title">Grupos</h3>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="counter">
                                        <i className="counter-icon flaticon-dog-in-front-of-a-man"></i>
                                        <div className="counter-value" data-count="343">0</div>
                                        <h3 className="title">Voluntários</h3>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="counter">
                                        <i className="counter-icon flaticon-dog-2"></i>
                                        <div className="counter-value" data-count="87">0</div>
                                        <h3 className="title">Adotados</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contadores