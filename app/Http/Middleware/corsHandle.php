<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class corsHandle
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Set CORS headers
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

        // Dynamically set the allowed headers
        $allowedHeaders = $request->headers->get('Access-Control-Request-Headers');
        if ($allowedHeaders) {
            $response->headers->set('Access-Control-Allow-Headers', $allowedHeaders);
        } else {
            $response->headers->set('Access-Control-Allow-Headers', '*');
        }

        // Handle preflight request
        if ($request->getMethod() == "OPTIONS") {
            $response->setStatusCode(200);
        }

        return $response;
    }

}
