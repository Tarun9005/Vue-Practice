Vue.component('task-list',{
	template:`

	<div>
	<li v-for="task in tasks">{{task.description}}</li>



	</div>
	`,





data(){

			return{
				tasks:[
				{description:'Go to the store'},
				{description:'Finish'},
				{description:'batman is hero'}
			
			




				]

			};
		}
	});
		

new Vue({
	el:'#root'
})
