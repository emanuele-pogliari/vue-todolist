const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                {
                    text: 'task 1',
                    done: true
                }, {
                    text: 'task 2',
                    done: false
                }, {
                    text: 'task 3',
                    done: true
                }, {
                    text: 'task 4',
                    done: false
                }, {
                    text: 'task 5',
                    done: false
                }
            ]
        }
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        addTask() {
            this.tasks.push({ text: this.newTask, done: false })
            this.newTask = '';
        },
        invert(task) {
            if (task.done == true) {
                task.done = false
            } else if (task.done == false) {
                task.done = true
            }
        }
    },
}).mount('#app');