new Vue({
	el: '#todo-list',
	data: {
		newTodoText: "",
		isWrong: false,
		todos: [
			"Do the dishes",
			"Take out the trash",
			"Nothing to do "
		]
	},
	methods: {
		addNewTodo: function() {
			if (this.newTodoText !== '') {
				this.todos.unshift(this.newTodoText);
				this.newTodoText = '';
				chrome.storage.sync.set({
					'todolist': this.todos
				})
			} else {
				this.isWrong = true
			}
		},
		init: function() {
			var self = this;
			chrome.storage.sync.get('todolist', function(data) {
				// console.log(data)  //object  1>todolist[]
				self.todos = data.todolist
			})
		},
		del: function(index) {
			this.todos.splice(index, 1);
			chrome.storage.sync.set({
				'todolist': this.todos
			})
		},
		modified: function() {
			this.isWrong = false;
		}
	},
	created: function() {
		this.init();
	}
})