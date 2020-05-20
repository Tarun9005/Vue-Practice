Vue.component('coupon',{

	template:`<input placeholder="enter the code" @blur="oncouponapplied">`


	 methods:{

	 	oncouponapplied(){
	 		alert('applied');
	 	}
	 }
	
});
new Vue({
	el: '#root',
	 methods:{
	 	oncouponapplied(){
	 		alert('It was applied');
	 		console.log("applied");
	 	}
	 }
});