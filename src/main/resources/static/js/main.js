// пока не работает
Vue.component('post-row', {
    props: ['post'],
    template:
        '<div>' +
        '<i>{{ post.id }}</i>' +
        '{{post.text}}' +
        '</div>'
});

Vue.component('post-list', {
    props: ['posts'],
    data: function () {
        return {
            post: null
        }
    },
    template:
        '<div>' +
        '<post-row v-for="post in posts" :key="post.id" :post="post"/>' +
        '</div>'
});

let app = new Vue({
    el: '#app',
    template: '<post-list :posts="posts"/>',
    data: {
        posts: [
            'Post 1',
            'Post 2',
            'Post 3'
        ]
    }
});