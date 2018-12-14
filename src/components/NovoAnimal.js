import React, { Component } from 'react'
import base, { storage } from '../data/base'

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview);

class NovoAnimal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        this.setState({
            success: true
        })

        const novoAnimal = {
            nome: this.nome.value,
            idade: this.idade.value,
            tipoAnimal: this.tipoAnimal.value,
            sexo: this.sexo.value,
            fotoPrincipal: "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/150838553-tips-for-first-30-days-dog-632x475.jpg"//this.fotoPrincipal.value
        };
        base.push('bichosadocao', {
            data: novoAnimal
        }).then((err) => {
            err && console.log(err);
        })

    }
    render() {
        return (
            <div className="container" style={{ padding: "120px" }}>
                <h1>Novo animal para adoção</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" className="form-control" id="nome" ref={(ref) => this.nome = ref}></input>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="form-group">
                                <label htmlFor="idade">Idade</label>
                                <input type="text" className="form-control" id="idade" ref={(ref) => this.idade = ref}></input>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group">
                                <label htmlFor="tipoAnimal">Tipo</label>
                                <select className="form-control" id="tipoAnimal" ref={(ref) => this.tipoAnimal = ref}>
                                    <option value="gato"> Gato </option>
                                    <option value="cachorro"> Cachorro </option>
                                    <option value="cavalo"> Cavalo </option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="form-group">
                                <label htmlFor="sexo">Sexo</label>
                                <select className="form-control" id="sexo" ref={(ref) => this.sexo = ref}>
                                    <option value="femea"> Fêmea </option>
                                    <option value="macho"> Macho </option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label htmlFor="fotoPrincipal">Foto Principal</label>
                                <input type="file" className="form-control" id="fotoPrincipal" ref={(ref) => this.fotoPrincipal = ref}></input>
                            </div>
                        </div>
                        {/* <div className="col-lg-4">
                            <div className="form-group">
                                <label htmlFor="fotoPrincipal">Foto principal </label>
                                <FilePond id="fotoPrincipal" ref={(ref) => this.fotoPrincipal = ref} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <label htmlFor="fotosAlbum">Mais fotos <small> até 5 fotos</small></label>
                                <FilePond id="fotosAlbum" allowMultiple={true} ref={(ref) => this.fotosAlbum = ref} />
                            </div>
                        </div>
                        */}
                        <div className="col-lg-4 text-center">
                            <hr />
                            <button type="submit" className="btn btn-info">Salvar</button>
                            <hr />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default NovoAnimal