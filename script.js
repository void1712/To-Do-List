document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-task');
        completeButton.innerHTML = '&#10003;';  // Checkmark
        completeButton.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task');
        deleteButton.innerHTML = '&#10005;';  // Cross
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskInput.focus();
    }
});
