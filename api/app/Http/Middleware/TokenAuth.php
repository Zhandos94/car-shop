<?php

namespace App\Http\Middleware;

use Closure;

class TokenAuth
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->header('app_key');

        if ($token != 'some_app_key') {
            return response()->json(['message' => 'App key is wrong'], 401);
        }

        return $next($request);
    }
}
