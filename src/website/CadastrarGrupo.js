import React, { Component } from 'react'

class CadastrarGrupo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <section id="blurb" className="bg-primary text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <img src="./images/YoungDakotaFace-Large-704x454.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-xl-4" data-aos="fade-down">
                                <h2 className="res-margin">Junte-se a nós</h2>
                                <p className="featured-text">
                                    Faça o cadastro do grupo e inclua os membros e os animais que estão aos cuidados de clinicas ou padrinhos, assim já
                                    divulgamos um link com os que estão prontos para adoção no whatsapp, facebook e outras redes sociais
                             </p>
                                <a href="" className="btn btn-success">Cadastrar Grupo  <i className="counter-icon flaticon-animals-7"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default CadastrarGrupo