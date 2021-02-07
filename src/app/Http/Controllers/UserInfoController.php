<?php

namespace App\Http\Controllers;

use App\Models\UserInfo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class UserInfoController extends Controller
{
    /**
     * Sends user info
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(Auth::user(), 200);
    }

    /**
     * Creates a new user preference.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $userinfo = new UserInfo;

        // Inject existing
        $userinfo->user_name = Auth::user()->name;
        $userinfo->email = Auth::user()->email;
        $userinfo->country = $request->country;

        $userinfo->save();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Retrieves user-defined settings and preferences.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $userData = UserInfo::where(
            'email',
            Auth::user()->email
        )->get();

        if (count($userData) == 0) {
            $response = '';
            $status = 404;
        } else {
            $response = $userData;
            $status = 200;
        }

        return response($response, $status);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
