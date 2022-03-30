var app = new Vue(
    {
        el: '#root',
        
        data:{
            title: 'Hello World',
            image: './img-leon.jpg',
            width: 'width_100',
            f_center: 'text-center'
        },

        methods: {
            play: function(event){
                this.$refs.audio.play();
            }
        }
    }
)

// function play(){
//     var audio = document.getElementById('audio');
//     audio.play();
// }