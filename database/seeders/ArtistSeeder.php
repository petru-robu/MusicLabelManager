<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArtistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('artists')->insert([
            [
            'first_name' => 'Taylor', 
            'last_name' => 'Swift',
            'genre' => 'Pop',
            ],
            [
            'first_name' => 'Petru', 
            'last_name' => 'Robu',
            'genre' => 'Rock', 
            ],
        ]);
    }

    
}
