<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __invoke(UserRequest $request)
    {
        $data = $request->validated();
        $user = User::firstOrCreate(
            ['email' => $data['email']],
            $data
        );
        $token = auth()->tokenById($user->id);
        return $token;
    }
}
