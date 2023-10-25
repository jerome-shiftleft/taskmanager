<form class="logout-form" method="POST" action="/logout">
  @csrf  
  <a class="logout-btn" href="route('logout')"
  onclick="event.preventDefault(); this.closest('form').submit();"
  data-bs-toggle="tooltip" data-bs-title="Logout">
    {{ $slot }}
  </a>
</form>