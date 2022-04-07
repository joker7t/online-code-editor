import { Cell, CellType } from '../cell';
import { Action } from '../actions';
import { ActionType } from '../action-types';

interface CellState {
    loading: boolean;
    error: string | null;
    order: string[];
    data: {
        [key: string]: Cell;
    };
}

const initialState: CellState = {
    loading: false,
    error: null,
    order: [],
    data: {}
};

const reducer = (state: CellState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.MOVE_CELL:
            return state;
        case ActionType.DELETE_CELL:
            return state;
        case ActionType.INSERT_CELL_BEFORE:
            return state;
        case ActionType.UPDATE_CELL:
            return state;
        default:
            return state;
    }
};

export default reducer;
