let count = 0
let app = new Vue({
    el: '#app',
    data: {
        message: 'Your score:', 
        score: count              
    },
    methods: {
        addScore(){
            count++
            this.score = count
        }
    }

            
        })