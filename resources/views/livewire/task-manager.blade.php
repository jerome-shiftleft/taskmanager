<div id="task-manager">
  @include('livewire.sections.select-project')
  <x-validation-error :message="$validation_error" />
  @include('livewire.sections.task-list')
  @include('livewire.sections.create-task-modal')
  @include('livewire.sections.update-task-modal')
</div><!-- /#task-mananager -->