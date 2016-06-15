export const updateActiveCellPosition = ({ dispatch }, rowIndex, columnIndex) => {
    dispatch('ACTIVE_CELL_POSITION', rowIndex, columnIndex);
};
