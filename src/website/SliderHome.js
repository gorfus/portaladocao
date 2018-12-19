import React, { Component } from 'react'
const divStyle = {
  "width": "1200px", "height": "800px", "margin": "0 auto", "marginBottom": "0px"
};

class SliderHome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div id="slider" style={divStyle}>
        <div className="ls-slide" data-ls="duration:4000; transition2d:7; kenburnszoom:out; kenburnsrotate:-5; kenburnsscale:1.2;">
          <img src="./images/pleasehelpdog.jpg" className="ls-bg" alt="" />
          <div className="ls-l header-wrapper" data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">
            <div className="header-text dog-elements">
              <h1>Adote seu bichinho hoje!</h1>
              <div className="d-none d-sm-block">
                <p className="header-p">Aqui são divulgados animais para adoção de diversos locais</p>
                <a className="btn btn-primary " href="adoption.html">Adote Hoje!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="ls-slide" data-ls="duration:4000; transition2d:7; kenburnszoom:out; kenburnsrotate:-5; kenburnsscale:1.2;">
          <img src="./images/maxresdefault.jpg" className="ls-bg" alt="" />
          <div className="ls-l header-wrapper" data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">
            <div className="header-text cat-elements">
              <h1>Faça você mesmo</h1>
              <div className="d-none d-sm-block">
                <p className="header-p"> Com pequenos gestos podemos confortar um animal perdido ou abandonado</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ls-slide" data-ls="duration:4000; transition2d:7; kenburnszoom:out; kenburnsrotate:-5; kenburnsscale:1.2;">
          <img src="./images//hands.jpg" className="ls-bg" alt="" />
          <div className="ls-l header-wrapper" data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">
            <div className="header-text dog-elements">
              <h1>Visit our Pet Hotel</h1>
              <div className="d-none d-sm-block">
                <p className="header-p">Our facility is designed to meet the unique needs of your pet</p>
                <a className="btn btn-primary " href="services.html">Our services</a>
              </div>
            </div>
          </div>
        </div>
        <div className="ls-slide" data-ls="duration:4000; transition2d:7; kenburnszoom:out; kenburnsrotate:-5; kenburnsscale:1.2;">
          <img src="./woof_html/img/slide4.jpg" className="ls-bg" alt="" />
          <div className="ls-l header-wrapper" data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400; parallaxlevel:0;">
            <div className="header-text cat-elements">
              <h1>Experienced Veterinarians</h1>
              <div className="d-none d-sm-block">
                <p className="header-p">Your pet is in good hands, meet our highly qualified professionals</p>
                <a className="btn btn-primary " href="team.html">Our Team</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SliderHome