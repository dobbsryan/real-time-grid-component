import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
        
    strict: true, // for dev only to throw warning if state updated outside of mutations

    state: function() {

        var activeRowIndex = -1;
        var activeColumnIndex = -1;

        var columns = ['row', 'name', 'date1', 'date2'];

        var data = [
            {
                row: 1,
                name: 'Chuck Norris',
                date1: '7',
                date2: '7'
            }, {
                row: 2,
                name: 'Bruce Lee',
                date1: '3',
                date2: '3'
            }, {
                row: 3,
                name: 'Jackie Chan',
                date1: '11',
                date2: '11' 
            }, {
                row: 4,
                name: 'Jet Li',
                date1: 'xs',
            date2: 'xs'
            }, {
                row: 5,
                name: 'Donnie Yen',
                date1: '8a',
                date2: '8a'
            }, {
                row: 6,
                name: 'Jason Statham',
                date1: 'B',
                date2: 'B'
            }
        ];

        return {

            activeRowIndex: activeRowIndex,
            activeColumnIndex: activeColumnIndex,
            columns: columns,
            data: data

        };
    },

    mutations: {
        ACTIVE_CELL_POSITION (state, rowIndex, columnIndex) {

            state.activeRowIndex = rowIndex;
            state.activeColumnIndex = columnIndex;

        }
    }
});
