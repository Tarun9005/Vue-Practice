Vue.component('modal',{

	template:`

	<div>
	<p>
	<slot name="bat"></slot>
	</p>
	</div>

	<li>
	<slot name="sup"></slot>
	</li>


	`
})

new Vue({

	el:'#root',
});