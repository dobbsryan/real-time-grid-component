<template>
    <div class="table">
        <table>
            <thead>
                <tr>
                    <th v-for="key in columns">
                        {{ key | capitalize }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rowIndex, entry) in data"
                >
                    <td v-for="(columnIndex, key) in columns"
                        class="cell"
                        :class="{activeRow: rowIndex == activeRowIndex,
                                 activeColumn: columnIndex == activeColumnIndex}"
                    >
                        <div class="view">
                            <label @click="makeCellActive(rowIndex, columnIndex)"
                            >{{ entry[key] }}</label>
                        </div>
                    </td>
                <tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { updateActiveCellPosition } from '../vuex/actions';
    import io from 'socket.io-client';
    //import VueResource from 'vue-resource';
    Vue.use(require('vue-resource'));

    const socket = io('http://192.168.10.10:8080');

    export default {
        vuex: {
            actions: {
                // called on upon initial load
                makingCellActive: updateActiveCellPosition 
            },
            getters: {
                columns: state => state.columns,
                data: state => state.data,

                // add active cell highlight
                activeRowIndex: state => state.activeRowIndex,
                activeColumnIndex: state => state.activeColumnIndex
            }
        },
        
        ready: function() {
            socket.on('clicked-cell-channel:App\\Events\\UserChangedActiveCell', function(data) {
                
                console.log(data.rowIndex);
                console.log(data.columnIndex);
                this.makingCellActive(data.rowIndex, data.columnIndex);
                
            }.bind(this));
        },

        methods: {
            // called on as a result of user clicking on cell
            makeCellActive: function(rowIndex, columnIndex) {
                console.log(rowIndex, columnIndex);
                Vue.http.post('api/updateActiveCell', { rowIndex, columnIndex });
            }
        }

    }
</script>

<style>
    body {
      font-family: Helvetica Neue, Arial, sans-serif;
      font-size: 14px;
      color: #444;
    }

    table {
      border: 2px solid #42b983;
      border-radius: 3px;
      background-color: #fff;
    }

    th {
      background-color: #42b983;
      color: rgba(255, 255, 255, 0.66);
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -user-select: none;
    }

    td {
      background-color: #f9f9f9;
    }

    .cell {
        width: 200px;
    }
    .cell.activeRow.activeColumn {
        background-color: #B2DECA;
    }
    .view label {
        white-space: pre;
        word-break: break-word;
        padding: 6px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
    }

    .cell.editing .view {
        display: none;
    }

    th,
    td {
      min-width: 120px;
    }

</style>
