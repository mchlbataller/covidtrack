<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    use HasFactory;

    // Table name
    protected $table = 'user_info';

    protected $primary_key = 'id';
    public $timestamps = true;
    protected $fillable = [
        'user_name',
        'email',
        'country'
    ];
}
