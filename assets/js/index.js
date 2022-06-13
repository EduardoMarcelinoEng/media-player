const { createApp } = Vue

createApp({
    data() {
        return {
            isPlay: false,
            position: 0,
            audio: null,
            listMusics: [
                {
                    name: 'Do I Wanna Know?',
                    band: 'Arctic Monkeys',
                    audio: 'https://firebasestorage.googleapis.com/v0/b/gestao-tarefas-8f871.appspot.com/o/Arctic%20Monkeys%20-%20Do%20I%20Wanna%20Know.mp3?alt=media&token=6b547f17-11ab-48a0-a020-b17954fa7b43',
                    img: '../img/Arctic Monkeys - Do I Wanna Know.jpg',
                    alt: 'Arctic Monkeys - Do I Wanna Know?'
                },
                {
                    name: 'Beautiful Crime',
                    band: 'Tamer',
                    audio: 'https://firebasestorage.googleapis.com/v0/b/gestao-tarefas-8f871.appspot.com/o/Tamer%20-%20Beautiful%20Crime.mp3?alt=media&token=06f6fcb0-1f0b-49b4-861b-83474c786c4c',
                    img: '../img/Tamer - Beautiful Crime.jpg',
                    alt: 'Tamer - Beautiful Crime'
                },
                {
                    name: "I Don't Care",
                    band: 'Apocalyptica',
                    audio: 'https://firebasestorage.googleapis.com/v0/b/gestao-tarefas-8f871.appspot.com/o/Apocalyptica%20-%20I%20Dont%20Care.mp3?alt=media&token=f8d343dd-3699-4579-a5ee-04f7dfe0eae4',
                    img: '../img/Apocalyptica - I Dont Care.jpg',
                    alt: 'Apocalyptica - I Dont Care'
                },
                {
                    name: 'Run Boy Run',
                    band: 'Woodkid',
                    audio: 'https://firebasestorage.googleapis.com/v0/b/gestao-tarefas-8f871.appspot.com/o/Woodkid%20-%20Run%20Boy%20Run.mp3?alt=media&token=e205aec0-6773-4ad6-8897-12000fbd99fb',
                    img: '../img/Woodkid - Run Boy Run.jpg',
                    alt: 'Woodkid - Run Boy Run'
                },
                {
                    name: 'Creep',
                    band: 'Radiohead',
                    audio: 'https://firebasestorage.googleapis.com/v0/b/gestao-tarefas-8f871.appspot.com/o/Radiohead%20-%20Creep.mp3?alt=media&token=9e5ddc10-7d9b-4a1a-9a02-712937ce4858',
                    img: '../img/Radiohead - Creep.jpg',
                    alt: 'Radiohead - Creep'
                }
            ]
        }
    },
    methods: {
        createAudio: function () {
            this.audio = new Audio(this.listMusics[this.position].audio);
        },
        toggle: function () {

            if(!this.audio) {
                this.createAudio();
            }

            this.isPlay = !this.isPlay;
            this.isPlay ? this.audio.play() : this.audio.pause();
        },
        toPlay: function(){
            this.isPlay = true;
            this.audio.play();
        },
        toPause: function(){
            this.isPlay = false;
            this.audio.pause();
        },
        next: function () {
            /*console.log('currentTime', this.formatTime(this.audio.currentTime));
            console.log('Duration', this.formatTime(this.audio.duration));*/
            this.position = (this.position < (this.listMusics.length - 1)) ? (this.position + 1) : 0;
            if(this.audio) this.toPause();
            this.createAudio();
            this.toPlay();
        },
        formatTime: function(duration){
            let minutes = parseInt(duration / 60);
            let seconds = Math.floor(duration % 60);

            if(seconds < 10) seconds = `0${seconds}`;

            return `${minutes}:${seconds}`;
        },
        previous: function () {
            if(this.audio && this.audio.currentTime > 5.0){
                this.audio.currentTime = 0;
                this.toPlay();
                return false;
            }
            this.position = (this.position >= 1) ? (this.position - 1) : (this.listMusics.length - 1);
            if(this.audio) this.toPause();
            this.createAudio();
            this.toPlay();
        }
    }
}).mount('#app');