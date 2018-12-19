import React, { Component } from 'react'


class Footer extends Component {
    render() {
        return (
            <footer className="text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <a className="navbar-brand" href="index.html"><i className="flaticon-dog-20"></i><span>!Quem ama cuida!</span></a>
                            <p className="mt-3"> Grupo do bairro Silveira - BH - MG </p>
                        </div>
                        <div className="col-lg-4">
                            <h6><i className="fas fa-envelope margin-icon"></i><a href="mailto:email@yoursite.com">quemamacuida@gmail.com</a></h6>
                            <h6><i className="fas fa-phone margin-icon"></i>(31)3333 3333</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="credits col-sm-12">
                            <p>Quem Ama Cuida / Desenvolvido por  <a href="http://www.linkedin.com/elisiarior">Ricardo Araujo</a></p>
                        </div>
                    </div>
                </div>
                <div className="page-scroll hidden-sm hidden-xs">
                    <a href="#top" className="back-to-top"><i className="fa fa-angle-up"></i></a>
                </div>
            </footer>
        )
    }
}

export default Footer