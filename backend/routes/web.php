<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/', 'App\Http\Controllers\ImageController@index');
// Route::get('list', 'App\Http\Controllers\ImageController@list')->name('image.list');
Route::get('input', 'App\Http\Controllers\ImageController@input')->name('image.input');
Route::post('input', 'App\Http\Controllers\ImageController@store')->name('image.store');

Route::get('/{any}', function () {
    return view('App');
})->where('any', '.*');//補足：.*は、正規表現で0文字以上の任意の文字列を意味する
