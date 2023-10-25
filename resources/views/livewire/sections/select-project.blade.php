<div id="select-project-wrap">

  <select wire:model="project_id" name="select_project" id="select-project" class="form-select search-select">
    <option value="">Select Project</option>
    @foreach ($projects as $project)
      <option value="{{ $project->id }}">{{ $project->title }}</option>
    @endforeach
  </select>

  <a href="#" id="create-task-modal-btn" class="btn btn-dark">
    <i class="fa-solid fa-plus"></i>
  </a><!-- /#create-task-modal-btn -->

  <div wire:loading class="task-preloader">
    <div class="spinner-border spinner-border-sm" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

</div><!-- /#select-project-wrap -->
