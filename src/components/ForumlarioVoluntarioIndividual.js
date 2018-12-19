import React, { Component } from 'react'

class ForumlarioVoluntarioIndividual extends Component {
    render() {
        return (
            <div class="card my-4 mt-5 bg-light-custom border-irregular1">
                <h5 class="card-header">Você é um volutário individual</h5>
                <div class="card-body">
                    <form>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor="nome"> Nome</label>
                                <input type="text" className="form-control" id="nome" ref={(ref) => this.nome = ref}></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor="telefone"> Telefone</label>
                                <input type="text" className="form-control" id="telefone" ref={(ref) => this.telefone = ref}></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor="email"> Email</label>
                                <input type="text" className="form-control" id="email" ref={(ref) => this.email = ref}></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ForumlarioVoluntarioIndividual