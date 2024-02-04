document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const filterStatus = document.getElementById('filterStatus');
    const filterPriority = document.getElementById('filterPriority');
    const searchInput = document.getElementById('search');
    const totalTasksCount = document.getElementById('totalTasks');
    const todoCount = document.getElementById('todoCount');
    const inProgressCount = document.getElementById('inProgressCount');
    const doneCount = document.getElementById('doneCount');

    let tasks = [];

    // Add task event listener
    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTask();
    });

    // Initialize tasks from local storage
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        displayTasks();
    }

    // Function to add a new task
    function addTask() {
        const taskName = document.getElementById('taskName').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;

        const newTask = {
            id: Date.now(),
            name: taskName,
            dueDate: dueDate,
            priority: priority,
            status: 'todo'
        };

        tasks.push(newTask);
        saveTasks();
        displayTasks();
        taskForm.reset();
    }

    // Function to save tasks to local storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to display tasks
    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task');
            taskItem.innerHTML = `
                <span>${task.name} - Due: ${task.dueDate}</span>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(taskItem);
        });

        updateTaskCounts();
    }

    // Function to edit a task
    window.editTask = function (taskId) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        const updatedTaskName = prompt('Enter updated task name:', tasks[taskIndex].name);
        const updatedDueDate = prompt('Enter updated due date:', tasks[taskIndex].dueDate);

        if (updatedTaskName !== null && updatedDueDate !== null) {
            tasks[taskIndex].name = updatedTaskName;
            tasks[taskIndex].dueDate = updatedDueDate;
            saveTasks();
            displayTasks();
        }
    };

    // Function to delete a task
    window.deleteTask = function (taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasks();
        displayTasks();
    };

    // Function to update task counts
    function updateTaskCounts() {
        totalTasksCount.textContent = tasks.length;
        todoCount.textContent = tasks.filter(task => task.status === 'todo').length;
        inProgressCount.textContent = tasks.filter(task => task.status === 'inprogress').length;
        doneCount.textContent = tasks.filter(task => task.status === 'done').length;
    }
});
