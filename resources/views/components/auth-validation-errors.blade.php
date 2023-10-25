@props(['errors'])

@if ($errors->any())
  <div class="auth-validation-errors alert alert-danger">
    <div class="font-weight-bold text-danger">
      {{ __('Whoops! Something went wrong.') }}
    </div>

    <ul class="mt-3 list-unstyled text-sm text-danger">
      @foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
      @endforeach
    </ul>
  </div><!--/.auth-validation-errors-->
@endif