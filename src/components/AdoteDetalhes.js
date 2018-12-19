import React, { Component } from 'react'

class AdoteDetalhes extends Component {
    constructor(props) {
        super(props)
        const id = this.props.match.params.idAnimal
        // this.state = {
        //     "animal": animais[id]
        // }
    }

    render() {
        // const animal = this.props.animal.animal
        return (
            <div className="page">
          
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row bg-light-custom border-irregular1 block-padding">
                                <div className="col-lg-4 offset-lg-2">
                                    <div id="owl-adopt-single" className="owl-carousel top-centered-nav owl-theme" >
                                        <div className="col-md-12">
                                            <a href="img/adoption/adoption1.jpg" title="your caption here">
                                                <img   className="border-irregular1 img-fluid hover-opacity" alt="" />
                                            </a>
                                        </div>
                                        <div className="col-md-12">
                                            <a href="img/adoption/adoptionsingle1.jpg" title="your caption here">
                                                <img src="img/adoption/adoptionsingle1.jpg" className="border-irregular2 img-fluid hover-opacity" alt="" />
                                            </a>
                                        </div>
                                        <div className="col-md-12">
                                            <a href="img/adoption/adoptionsingle2.jpg" title="your caption here" >
                                                <img src="img/adoption/adoptionsingle2.jpg" className="border-irregular1 img-fluid hover-opacity" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 res-margin mt-5 text-xs-center">
                                    <h4><strong>Pet name:</strong> Fluffy</h4>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul className="list-unstyled pet-adopt-info">
                                                <li className="h7">Gender: <span>female</span></li>
                                                <li className="h7">Age: <span>2 years</span></li>
                                                <li className="h7">Breed: <span>Poodle</span></li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul className="list-unstyled pet-adopt-info">
                                                <li className="h7">Neutered: <span>Yes</span></li>
                                                <li className="h7">Vaccinated: <span>Yes</span></li>
                                                <li className="h7">Size: <span>Medium</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-weight-bold">Fluffy is a very sweet and active dog, she is ready for a new home!</p>
                                    <a href="#" className="btn btn-primary " data-aos="zoom-in" >Adopt now!</a>
                                </div>
                            </div>
                            <div className="col-md-12 mt-5">
                                <h3>Sobre o {}</h3>
                                <ul className="custom list-inline font-weight-bold">
                                    <li className="list-inline-item">Friendly to other dogs</li>
                                    <li className="list-inline-item">Good for Apartments</li>
                                    <li className="list-inline-item">Friendly with Kids</li>
                                </ul>
                                <p>Elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus
                                   ac sodales felis tiam non metus. lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset campas fincas
                        </p>
                                <p>Elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus
                                   ac sodales felis tiam non metus. lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset campas fincas
                        </p>
                                <div className="alert alert-primary mt-5" role="alert">
                                    <h6 className="text-light">Adoption Rules</h6>
                                    <p>Elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus
                                       ac sodales felis tiam non metus. lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset campas fincas
                           </p>
                                </div>
                                <p className="custom-link"><a href="adoption.html">« Go back to adoption gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdoteDetalhes