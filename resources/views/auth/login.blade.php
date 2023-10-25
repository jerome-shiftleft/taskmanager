@extends('layouts.guest', [
    'body_id' => 'login',
    'body_class' => 'guest',
])

@section('meta-dynamic')
  <title>Login</title>
  <meta name="description" content="Login">
@endsection

@push('page-head-scripts')
@endpush

@section('content')

  <div id="login-wrap">

    {{-- <div class="auth-status">{{ session('status') }}</div> --}}
    {{-- <x-auth-validation-errors :errors="$errors" /> --}}

    <form method="POST" action="{{ route('login') }}">
      @csrf

      <!-- Email Address -->
      <div class="mb-3">
        <label for="email" class="form-label">{{ __('Email') }}</label>
        <input id="email" class="form-control" type="email" name="email" value="{{ old('email') }}" required autofocus />
      </div>

      <!-- Password -->
      <div class="mb-3">
        <label for="password" class="form-label">{{ __('Password') }}</label>
        <input id="password" class="form-control" type="password" name="password" required autocomplete="current-password" />
      </div>

      <!-- Remember Me -->
      <div class="mb-3 form-check">
        <input id="remember_me" type="checkbox" class="form-check-input" name="remember">
        <label class="form-check-label" for="remember_me">
          <span class="ms-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
        </label>
      </div>

      <div id="login-actions">        
        <a class="" href="#">
          {{ __('Forgot your password?') }}
        </a>        

        <button type="submit" class="btn default-btn login-btn">{{ __('Log in') }}</button>
      </div><!--/#login-actions-->
    </form>

  </div><!--/#login-wrap-->

@endsection

@push('scripts')
@endpush
