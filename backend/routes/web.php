<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test-db', function (){
    try{
        DB::connection()->getPdo();
        return 'Database connection OK: ' . DB::connection()->getDatabaseName();
    } catch (\Exception $e) {
        return 'Database connection failed: ' . $e->getMessage();
    }
});

Route::get('/test-db-full', function () {
    try {
        DB::statement('CREATE TABLE IF NOT EXISTS test_items (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL
        )');

        DB::table('test_items')->insert([
            ['name' => 'Item A'],
            ['name' => 'Item B'],
            ['name' => 'Item C'],
        ]);

        $items = DB::table('test_items')->get();

        return response()->json($items);
    } catch (\Exception $e) {
        return 'Error: ' . $e->getMessage();
    }
});