<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <div v-for="blog in blogs" class="single-blog">
            <h2 v-rainbow>{{ blog.title }}</h2>
            <article>{{ blog.body }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blogs: []
        }
    },
    methods: {

    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        });
    }
}
// http -> 브라우저와 서버간 데이터를 주고 받는 통신 프로토콜
// http request = 데이터 request
// get -> 서버에서 데이터를 가져옴 서버 주소인 /api/data 로부터 값을 불러 올 때 사용
// axios 요청 시 파라메터 정보(/api/todos/1)를 같이 입력하여 정보를 얻어 올 수 있다.
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>