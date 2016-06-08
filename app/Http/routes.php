<?php

use App\Events\UserChangedActiveCell;
use Illuminate\Support\Facades\Redis;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
	//Redis::set('name', 'Ryan');
	event(new UserChangedActiveCell(-1,-1)); // upon loading page, will reset sheet so that no cells are selected

	// Return Redis::get('name');
    return view('welcome'); // will have the client versions of socket.io and vue in our case
});
