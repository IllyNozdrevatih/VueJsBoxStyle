var app = new Vue({
	el: '#app',
	data:{
		'backgroundColor':'black',
        'width':'100',
        'height':'100',
        'borderRadius':'5',
        'red':20,
        'green':20,
        'blue':20
	},
    computed: {
        styles:function () {
            return {
                width: this.width+'px',
                height: this.height+'px',
                backgroundColor: 'rgb('+parseInt(this.red,10)+','+parseInt(this.blue,10)+','+parseInt(this.green,10)+')',
                borderRadius: this.borderRadius+'%'
            }
        }
    }
});