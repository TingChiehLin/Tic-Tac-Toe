import React from 'react';
import './Square.scss';

const Square = ({index, updateSquare, allSquare}) => {
    
    return (
        <div className="square" onClick={(e) => {
            updateSquare(index);
        }}>
            <div className="play_turn">
                {allSquare[index].play_turn}
            </div>
        </div>
    )
}

export default Square
