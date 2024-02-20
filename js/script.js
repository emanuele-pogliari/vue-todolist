const { createApp } = Vue

createApp({
    data() {
        return {
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
        }
    },
}).mount('#app');