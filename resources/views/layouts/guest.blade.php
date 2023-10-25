@yield('header-php')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="csrf-token" content="{{ csrf_token() }}" />
  <link rel="apple-touch-icon" href="icon.png">
  <link rel="icon" type="image/x-icon" href="/icon.png">
  @yield('meta-dynamic')
  
  @livewireStyles

  @include('layouts.sections.styles')
  @include('layouts.sections.fonts')
  @include('layouts.sections.head-scripts')
  @stack('page-head-scripts')
</head>

<body id="{{ $body_id }}" class="{{ $body_class }}">

  <div class="page-wrap">   
    @yield('content')    
  </div><!-- /.page-wrap -->

  @livewireScripts
  @include('layouts.sections.footer-scripts')
  @stack('scripts')

</body>

</html>
