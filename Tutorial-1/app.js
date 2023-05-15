new Vue({
    el:'#vue-app',
    data: {
        name: 'suin', 
        job: 'student',
        website: 'www.naver.com',
        websiteTag: '<a href="www.google.com">Google</a>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time +  ' ' + this.name;
        }
    }
});