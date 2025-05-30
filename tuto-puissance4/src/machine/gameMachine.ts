import { createMachine } from 'xstate';

enum GameStates {
    LOBBY = 'LOBBY',
    PLAY ='PLAY',
    VICTORY = 'VICTORY',
    DRAW = 'DRAW',
}


export const GameMachine = createMachine ({

    id: 'game',
    initial: GameStates.LOBBY,
    states: {
        [GameStates.LOBBY]: {
        on: {
            join: {
                target: GameStates.LOBBY,
            },
             leave: {
                target: GameStates.LOBBY,
            },
             chooseColor: {
                target: GameStates.LOBBY,
            },
             start: {
                target: GameStates.PLAY,
            },
        },
        
        },
})