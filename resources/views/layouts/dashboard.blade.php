@yield('header-php')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="csrf-token" content="{{ csrf_token() }}" />
  {{-- <link rel="apple-touch-icon" href="icon.png"> --}}
  {{-- <link rel="icon" type="image/x-icon" href="/icon.png"> --}}
  @yield('meta-dynamic')

  @livewireStyles

  @include('layouts.sections.styles')
  @include('layouts.sections.fonts')
  @include('layouts.sections.head-scripts')
  @stack('page-head-scripts')
</head>

<?php
$theme = 'dark';
if (Auth::user()) {
    $theme = Auth::user()->theme;
}
?>

<body id="{{ $body_id }}" class="{{ $body_class }} {{ $theme }} side-collapse"
  data-bs-theme="{{ $theme }}">

  <div class="page-wrap">
    @include('layouts.sections.sidebar')
    @include('layouts.sections.topbar')
    @yield('main')
    @include('layouts.sections.footer')
  </div><!-- /.page-wrap -->

  @livewireScripts
  @include('layouts.sections.footer-scripts')

  @stack('scripts')

</body>

</html>
