<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      DB::table('users')->insert([
        //Admin
        [
          'name' => 'Admin',
          'username' => 'admin',
          'phone' => '081333333',
          'address'=>'jalan kuda',
          'email' => 'admin@gmail.com',
          'password' => Hash::make('123'),
          'role' => 'admin'
        ],    
        //Customer
        [
          'name' => 'Customer',
          'username' => 'customer',
          'phone' => '081444444',
          'address'=>'jalan rusa',
          'email' => 'customer@gmail.com',
          'password' => Hash::make('123'),
          'role' => 'customer'
        ] 
        
      ]);
    }
}
