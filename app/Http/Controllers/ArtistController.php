<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreArtistRequest;
use App\Http\Requests\UpdateArtistRequest;
use App\Models\Artist;

class ArtistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $artists = Artist::latest()->paginate(3);
        return inertia('Home', ['artists' => $artists]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'genre' => ['required']
        ]);

        Artist::create($fields);

        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Artist $artist)
    {
        return inertia('Show', ['artist' => $artist]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Artist $artist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Artist $artist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Artist $artist)
    {
        // dd($artist);
        $artist->delete();
        return redirect('/');
    }
}
