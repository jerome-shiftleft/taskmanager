@extends('layouts.dashboard', [
    'body_id' => 'dashboard-index',
    'body_class' => 'dashboard',
])

@section('meta-dynamic')
  <title>Task Manager</title>
  <meta name="description" content="Task Manager">
@endsection

@push('page-head-scripts')
@endpush

@section('main')
  <div id="main">

    <div class="content">

      <livewire:task-manager />

    </div><!-- /.content -->

  </div><!--/#main-->
@endsection

<?php
$phpVariable = ['test1', 'test2', 'test3'];
$jsonString = json_encode($phpVariable);
?>

@push('scripts')
  <script>
    window.myData = @json($phpVariable);
    //window.myData = <?php echo $jsonString ?>;  
  </script>
@endpush

