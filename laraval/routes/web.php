<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MenuItemController;

use Illuminate\Http\Request;
use App\Models\Category;

Route::get('/', function () {
    return view('welcome');
});
Route::resource('menu-items', MenuItemController::class);
Route::resource('categories', CategoryController::class);




Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');
Route::post('/menu-items', [MenuItemController::class, 'store'])->name('menu-items.store');

Route::post('/test', function (Request $request ) {
    echo 'Hello World';
    $request->validate([
        'name' => 'required|string|max:255',
    ]);

    Category::create([
        'name' => $request->name,
    ]);

});
