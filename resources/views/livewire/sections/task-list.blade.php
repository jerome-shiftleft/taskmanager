@isset($tasks)
  <div id="task-list" wire:sortable="reorderTasks">
    @foreach ($tasks as $task)
      <div class="task" wire:sortable.item="{{ $task->id }}" wire:key="task-{{ $task->id }}" data-id="{{ $task->id }}" data-project-id="{{ $task->project_id }}" data-priority="{{ $task->priority }}">

        <div class="task-header">

          <h3 wire:sortable.handle class="task-title">{{ $task->title }}</h3>

          <div class="task-header-actions">

            <a href="#" class="task-action expand-task">
              <i class="fa-solid fa-angle-down"></i>
            </a>

            <a href="#" class="task-action update-task-modal-btn">
              <i class="fa-solid fa-pen"></i>
            </a> <!-- /.edit-task-btn -->

            <a href="#" wire:click="deleteTask({{ $task->id }})">
              <i class="task-action delete-task fa-solid fa-xmark"></i>
            </a>

          </div><!-- /.task-header-actions -->

        </div><!-- /.task-header -->

        <div class="task-content" >
          @if(empty($task->description))
            No task description.
          @else
            {{ $task->description }}
          @endif
        </div><!-- /.task-content -->

      </div><!-- /.task -->
    @endforeach
  </div><!-- /#task-list -->
@endisset
