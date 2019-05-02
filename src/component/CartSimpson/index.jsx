import React from 'react';

const CartSimpson =({citation}) =>{
    console.log(citation)
    return(
        <div>
            <img src={citation.image} alt="picture"/>
            <ul>
                <li>
                    Non : {citation.character}
                </li>
                <li>
                    Citation : {citation.quote}
                </li>
            </ul>

        </div>
    );
};

export default CartSimpson