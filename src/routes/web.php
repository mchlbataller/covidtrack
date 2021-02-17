<?php

use App\Http\Controllers\UserInfoController;
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

Route::get('/', function () {
    return view('index', ['variable' => 'this is a variable from routes/web.php']);
});


Route::middleware(['auth:sanctum', 'verified'])->get('/admin/dashboard', function () {
    return view('admin.dashboard');
});

// Protected API that provides user data
Route::resource('user/data', UserInfoController::class);

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    // return Inertia\Inertia::render('Dashboard');
    return view('index');
})->name('dashboard');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
