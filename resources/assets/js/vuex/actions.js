export const updateActiveCellPosition = function ({ dispatch, state }, rowIndex, columnIndex) {
    
    dispatch('ACTIVE_CELL_POSITION', rowIndex, columnIndex);

};
