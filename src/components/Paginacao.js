import React, { Component } from 'react'

class Paginacao extends Component {
    render() {
        return (
            <div className="col-md-12 mt-5">
                <nav aria-label="pagination">
                    <ul className="pagination float-right">
                        <li className="page-item"><a className="page-link active" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Paginacao