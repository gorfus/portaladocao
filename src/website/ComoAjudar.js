import React, { Component } from 'react'

class ComoAjudar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
<div>


<section id="services" className="cat-bg3">
<div className="container">
  <div className="section-heading text-center">
    <h2>Rede Bicho </h2>
    <hr/>
  </div>
  <div className="container block-padding pt-0">
    <div className="row">
      <div className="col-xl-6">
        <h3>Qual é a ideia?</h3>
        <p>
          A rede Bichos é uma ferramenta para ajudar grupos independentes e autônomos que
          amam os animais e procuram juntos a ajuda-los da forma que cada um pode.
          <br />
          <br />
          Sabe outra coisa fantástica? os animais cadastrados para a adoção através dos grupos da Bichos são
          divulgados em um único local! 
          
          Assim ampliamos as opções para quem procura adotar e aumentamos as visitas de cada bichinho que estão em lares temporários ou 
          se recuperando em clinicas. 
        </p>
        <hr />
      </div>
      <div className="col-xl-6">
        <img src="./images/Screenshot_2.png" alt="" data-aos="fade-down" data-aos-duration="1500" className="img-fluid border-irregular1 border-double" />
      </div>
    </div>
  </div>
  <div className="bg-light-custom block-padding border-irregular1">
      <div className="row">
          <div className="col-lg-12">
                    <div className="section-heading text-center">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <h2>Como podemos ajudar</h2>

                          <p>Podemos ajudar de diversas formas! tanto animal a espera de um novo lar como a pessoa ou grupos que cuidam daquele bichinhjo 
                          até que seja encaminhado, confira algumas ideias
                          </p>
                        </div>
                      </div>
                    
                    </div>
                  </div>
    <div id="owl-services" className="container owl-carousel owl-theme">

      <div className="col-md-12">
        <div className="serviceBox">
          
          <div className="service-icon">
            <i className="flaticon-pet-shelter"></i>
          </div>
          <div className="service-content">
            <h6>Lar Temporário</h6>
            <p>
              Você tem espaço em casa e pode hospedar um animalzinho?
              <br /><strong>Tem todo nosso apoio!</strong>
              <br />
              Temos muitas dicas.
              Juntos vamos conseguir um lar definitivo e feliz para ele :)
            </p>
            <a className="btn btn-primary" href="">Instruções</a>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="serviceBox">
          <div className="service-icon">
            <i className="flaticon-people-1"></i>
          </div>
          <div className="service-content">
            <h6>Doe seu Tempo</h6>
            <p>
              Não pode hospedar um bichinho na sua casa mas tem algum tempo livre?
             <br /> Que tal leva-lo para passear, pet-shop, parques, brincar. Os animais também precisam disso!
            </p>
            <a className="btn btn-primary" href="">veja quem faz isso</a>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="serviceBox">
          <div className="service-icon">
            <i className="flaticon-animals-2"></i>
          </div>
          <div className="service-content">
            <h6>Banho Social</h6>
            <p>
              Tire um dia e va até a casa de um padrinho ou leve o amigo para casa e dê um banho ou leve num pet-shop. Assim
              você vai interagir com os nossos amigos e dar um força para o padrinho. 
            </p>
            <a className="btn btn-primary" href="">conheça eles</a>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="serviceBox">
          <div className="service-icon">
            <i className="flaticon-dog-with-first-aid-kit-bag"></i>
          </div>
          <div className="service-content">
            <h6>Veterinário</h6>
            <p>
              Você pode contribuir para ajudar a custear despezas com  consultas, medicações e internações. Se tiver
              disponibilidade pode levar o bicho para clinica e ajudar o padrinho nesta tarefa
            </p>
            <a className="btn btn-primary" href="">Saiba como funciona</a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div> 
</section> 
</div>
)}}

export default ComoAjudar