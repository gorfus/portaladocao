import React, { Component } from 'react'

class ForumlarioVoluntarioGrupo extends Component {
    render() {
        return (
            <div class="card my-4 mt-5 bg-light-custom ">
                <h5 class="card-header">Você é volutário de um grupo</h5>
                <div class="card-body">
                    <form>
                        <div className="col-lg-12">
                            <div class="form-group">
                                <label for="exampleFormControlSelect1 ">Grupo</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Selecione...</option>
                                    <option>Quem Ama Cuida</option>
                                    <option>Floresta Animais</option>
                                    <option>APAEM</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="text" className="form-control "  id="email" ref={(ref) => this.email = ref}></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor="senha"> Senha</label>
                                <input type="password" className="form-control" id="senha" ref={(ref) => this.senha = ref}></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ForumlarioVoluntarioGrupo
