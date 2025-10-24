<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ArtistController;

// Route::get('/', function () {
//     return Inertia::render('Home');
// });

Route::get('/greeting', function () {
    return 'Hello World';
});

Route::get('/', [ArtistController::class, 'index']);

Route::resource('artists', ArtistController::class)->except('index');