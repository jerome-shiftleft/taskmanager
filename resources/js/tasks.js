$(function () {
  console.log('task.js loaded!');

  $(document).on('click', '.expand-task', function () {
    console.log('toggling description');
    //$(this).closest('.task').find('.task-content').toggle();
    $(this).closest('.task').toggleClass('expanded-task');
  });

  $(document).on('click', '#create-task-modal-btn', function () {
    $('#create-task-modal').css('display', 'flex');
  });

  $(document).on('click', '#create-task-cancel-btn', function () {
    $('#create-task-form').find('input, textarea').val('');
    $('#create-task-modal').css('display', 'none');
  });

  $(document).on('submit', '#create-task-form', function (e) {
    e.preventDefault();
    $('#create-task-btn').prop('disabled', true);
    var project_id = $('#task-project-id').val();
    var title = $('#title').val();
    var description = $('#description').val();

    var data = {
      project_id,
      title,
      description
    }

    if (project_id === '0' || project_id.trim() === '' || title.trim() === '') {
      console.log('Validation error');
      $(this).find('.validation-error').html('Please select a project and provide a title.')
      $('#create-task-btn').prop('disabled', false);
    } else {
      console.log('Valid form data');
      Livewire.emitTo('task-manager', 'createTask', data);
    }

    //Livewire.emit('createTask', data);

  }); // end of $('#create-task-form').on('submit', function (e)

  $(document).on('click', '.update-task-modal-btn', function () {
    console.log('show update modal');
    $('#update-task-modal').css('display', 'flex');

    var task = $(this).closest('.task');
    //var project_id = $('#select-project').val();
    var project_id = task.data('project-id');
    var id = parseInt(task.data('id'));
    var title = task.find('.task-title').text();
    var description = task.find('.task-content').text();
    description = description.trim();
    description = (description == 'No task description.') ? '' : description;

    //console.log(`tid: ${id} - pid: ${project_id} - ${title} - ${description}`);
    console.log('id: ', id);
    console.log('project id: ', project_id);
    console.log('title: ', title);
    console.log('description: ', description);

    $('#update-task-id').val(id);
    $('#update-project-id').val(project_id);
    $('#update-title').val(title);
    $('#update-description').val(description);

  }); // end of $('.update-task-modal-btn').on('click', function () {

  $(document).on('click', '#update-task-cancel-btn', function () {
    $('#update-task-modal').css('display', 'none');
  });

  $(document).on('submit', '#update-task-form', function (e) {
    e.preventDefault();
    var id = parseInt($('#update-task-id').val());
    var new_project_id = $('#update-project-id').val();
    var new_title = $('#update-title').val()
    var new_description = $('#update-description').val();

    var data = {
      'id': id,
      'project_id': new_project_id,
      'title': new_title,
      'description': new_description
    }

    if (new_project_id === '0' || new_project_id.trim() === '' || new_title.trim() === '') {
      console.log('Validation error');
      $(this).find('.validation-error').html('Please select a project and provide a title.')
      $('#create-task-btn').prop('disabled', false);
    } else {
      console.log('Valid form data');
      console.log('task new data: ');
      console.log(data);
      Livewire.emitTo('task-manager', 'updateTask', data);
    }
  }); // end of $('#update-task-form').on('submit', function (e)

  window.addEventListener('selectProject', event => {
    var project_id = $('#select-project').val();
    $('#task-project-id').val(project_id);
    console.log('tasks order: ');
    $('#task-list > .task').each(function (index) {
      var id = $(this).data('id');
      var priority = $(this).data('priority');
      var title = $(this).find('.task-title').text();
      console.log(`index[${index}] id:${id} priority:${priority} title:${title}`);
    }); // end of $('#task-list > .task').each(function (index) {
  }); // end of window.addEventListener('selectProject', event => {  

  window.addEventListener('taskCreated', event => {
    console.log('Task Created!');
    $('#create-task-form').find('input, textarea').val('');
    $('#create-task-modal').css('display', 'none');
    console.log('task created!');
    console.log('tasks order: ');
    $('#task-list > .task').each(function (index) {
      var id = $(this).data('id');
      var priority = $(this).data('priority');
      var title = $(this).find('.task-title').text();
      console.log(`index[${index}] id:${id} priority:${priority} title:${title}`);
    }); // end of $('#task-list > .task').each(function (index) {
  }); // end of window.addEventListener('taskCreated', event => {

  window.addEventListener('taskUpdated', event => {
    console.log('Task Updated!');
    $('#update-task-form').find('input, textarea').val('');
    $('#update-task-modal').css('display', 'none');
    console.log('tasks order: ');
    $('#task-list > .task').each(function (index) {
      var id = $(this).data('id');
      var priority = $(this).data('priority');
      var title = $(this).find('.task-title').text();
      console.log(`index[${index}] id:${id} priority:${priority} title:${title}`);
    }); // end of $('#task-list > .task').each(function (index) {
  }); // end of window.addEventListener('taskCreated', event => {

  window.addEventListener('listOrder', event => {
    console.log('tasks order: ');
    $('#task-list > .task').each(function (index) {
      var id = $(this).data('id');
      var priority = $(this).data('priority');
      var title = $(this).find('.task-title').text();
      console.log(`index[${index}] id:${id} priority:${priority} title:${title}`);
    }); // end of $('#task-list > .task').each(function (index) {
  }); // end of window.addEventListener('listOrder', event => {


}); // end of initialize jquery