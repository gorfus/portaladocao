import React from 'react'

import Paginacao from './Paginacao'
import AdoteCard from './AdoteCard'

const Adote = ({ animais }) => {
    return (
        <div className="page">
            <div className="container block-padding pt-0">
                <div className="col-lg-8 offset-lg-2 text-center">
                    <h3>Encontre o seu novo Amigo!</h3>
                    <p>
                        Podemos ajudar de diversas formas os animais ou quem ajudam eles. 
                    </p>
                </div>
                <div className="row">
                    {
                        Object.keys(animais)
                            .map(key => <AdoteCard key={key} animalId={key}  animal={animais[key]} />)
                    }
                </div>
                <Paginacao />
            </div>
        </div>
    )
}

export default Adote