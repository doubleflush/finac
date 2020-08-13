import { UPDATE_TILE } from './../dispatchTypes';

export const updateTile = (tileName) => {
    return async (dispatch, getState) => {
        dispatch({
            type: UPDATE_TILE,
            payload: tileName
        })
    }
};
