<?php

use App\Events\UserChangedActiveCell;

Route::get('/', function () {
    return view('welcome'); // will have the client versions of socket.io and vue in our case
});

Route::post('api/updateActiveCell', 'ActiveCellController@method');
