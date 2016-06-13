export const updateActiveCellPosition = function ({ dispatch, state }, rowIndex, columnIndex) {
    
    console.log('rowIndex: ' + rowIndex);
    console.log('columnIndex: ' + columnIndex);
    
    dispatch('ACTIVE_CELL_POSITION', rowIndex, columnIndex);

};
