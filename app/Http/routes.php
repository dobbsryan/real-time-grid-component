<?php

use App\Events\UserChangedActiveCell;

Route::get('/', function () {
	event(new UserChangedActiveCell()); // upon loading page, will reset sheet so that no cells are selected
    return view('welcome'); // will have the client versions of socket.io and vue in our case
});

Route::post('api/updateActiveCell', 'ActiveCellController@method');
