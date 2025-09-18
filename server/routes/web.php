<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/login', function () {
    // return view('auth.login'); // or your actual login view
    return view('welcome'); // or your actual login view
})->name('login'); // ✅ this name is required

