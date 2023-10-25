<div id="create-task-modal" class="task-modal">
  <form id="create-task-form">

    <h2 class="modal-title">Create Task</h2>

    <div class="validation-error">

    </div><!-- /#validation-error -->

    <div class="form-inputs">

      <select name="task_project_id" id="task-project-id" class="form-select" required>
        <option value="">Select Project</option>
        @foreach ($projects as $project)
          <option value="{{ $project->id }}">{{ $project->title }}</option>
        @endforeach
      </select>

      <input type="text" id="title" name="title" class="form-control" placeholder="Title" required>

      <textarea id="description" name="description" class="form-control" rows="4" placeholder="Description"></textarea>

    </div><!-- /.form-inputs -->

    <div class="modal-actions">
      <button type="button" id="create-task-cancel-btn" class="btn btn-secondary">Cancel</button>
      <button id="create-task-btn" type="submit" class="btn btn-primary">Create</button>
    </div><!-- /.modal-actions -->

  </form>
</div><!-- /#create-task-modal -->