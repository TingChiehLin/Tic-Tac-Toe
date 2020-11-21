import React,{ useState, useCallback } from 'react';
import './Board.scss';

import Square from '../Square/Square';

function Board() {

    let [play_turn, setPlay_turn] = useState('X');
    let [winner, setWinner] = useState('');
    const [SQUARES, setSquare] = useState (
    [
        {
            key:'0',
            play_turn:''
        },
        {
            key:'1',
            play_turn:''
        },
        {
            key:'2',
            play_turn:''
        },
        {
            key:'3',
            play_turn:''
        },
        {
            key:'4',
            play_turn:''
        },
        {
            key:'5',
            play_turn:''
        },
        {
            key:'6',
            play_turn:''
        },
        {
            key:'7',
            play_turn:''
        },
        {
            key:'8',
            play_turn:''
        }
    ]);
   
    const calculateWinner = (squares) => {
        const isWinning_conditional = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let i=0;i<isWinning_conditional.length;i++) {
            const [a,b,c] = isWinning_conditional[i];
            console.log(squares[a]);
            if(squares[a].play_turn && squares[a].play_turn === squares[b].play_turn && squares[b].play_turn === squares[c].play_turn) {      
                return squares[a].play_turn;
            }
        }
        return null;
    }

    const UpdateSquare = useCallback((index) => {
       if(calculateWinner(SQUARES) || SQUARES[index].play_turn) return;
       SQUARES[index].play_turn = play_turn;
       play_turn = play_turn === 'X'? setPlay_turn('O') : setPlay_turn('X');
       const winner = calculateWinner(SQUARES);
       setWinner(winner);
    })

    const SQUARESRender = SQUARES.map((e, index)=> <Square
        key={e.key}
        index={index}
        updateSquare={UpdateSquare}
        allSquare={SQUARES}
    />)

    return (
        <>
            <h1>Winner: {winner}</h1>
            <div className="board">
                {SQUARESRender}
            </div>
        </>
    )
}

export default Board
