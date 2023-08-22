const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// const btnPlay = document.querySelector(".btnPlay");
// btnPlay.addEventListener("click",function(){
//     document.querySelector(".container-control").style.display = "block"
// })

function Show () {
    document.querySelector(".player").style.display = "block"

}
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const pauseBtn = $('.btnPause')
const volumeBtn = $('.slider')
const progress = $("#progress")
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
console.log(playBtn);
const app = {
    currentIndex :0,
    songs: [
        
        {
            namemusic: 'Bận lòng',
            path: './music/BanLong-PayPhongKhin-7990183.mp3',
            image: './img/phongkhin.jpg'
        },
        {
            namemusic: 'Sự Mập Mờ',
            path: './music/SuMapMo-SuniHaLinh-9873697.mp3',
            image: './img/phongkhin.jpg'
        },
        {
            namemusic: 'Có em',
            path: './music/CoEm-MadihuLowG-7211022.mp3',
            image: './img/phongkhin.jpg'
        },
        {
            namemusic: 'Nữ Siêu Anh Hùng',
            path: './music/NuSieuAnhHung-tlinh-10715744.mp3',
            image: './img/phongkhin.jpg'
        },
        {
            namemusic: 'Waiting For You',
            path: './music/WaitingForYou-MONOOnionn-7733882.mp3',
            image: './img/phongkhin.jpg'
        },
        {
            namemusic: 'Tay To',
            path: './music/TayTo-MCKRPTRPTPhongKhin-6984700.mp3',
            image: './img/phongkhin.jpg'
        },
        {
            namemusic: 'Lắng nghe nước mắt',
            path: './music/Lang-Nghe-Nuoc-Mat-Mr-Siro.mp3',
            image: './img/phongkhin.jpg'
        },
        {
            namemusic: 'Ghệ iu dấu của a ơi',
            path: './music/GheIuDauCuaEmOi-tlinh2pillzWOKEUPAT4AM-8677578.mp3',
            image: './img/phongkhin.jpg'
        },
        {
            namemusic: 'Em đồng ý',
            path: './music/EmDongYIDo-DucPhucx911-9034315.mp3',
            image: './img/phongkhin.jpg'
        },
        
    ],
    // Hiện thị list nhạc ra ngoài
    render: function() {
        const htmls = this.songs.map(song => {
            return `
            <div class="list-music-child">
                <div><img src="${song.image}" alt="" /></div>
               
               <div class="control-music">
               <p>${song.namemusic}</p>
               <div>
               <a href="#"   class="btnPlay" onclick="Show ()"><i class="fa-solid fa-play"></i></a>
               <a href=""><i class="fa-solid fa-trash"></i></a>
               <a href=""><i class="fa-solid fa-download"></i></a>
               </div>
               </div>
              </div>
            `
        })
        $('.contanier-music').innerHTML = htmls.join('')
    },

    //  lấy nhạc
    defineMusic: function() {
        Object.defineProperty(this,'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    loadCurrentSong: function() {
        audio.src = this.currentSong.path
    },
    //next bài hát
    prevSong: function(){
        this.currentIndex--
        if(this.currentIndex <0 ) {
            this.currentIndex =this.songs.length-1
        }
       this.loadCurrentSong()
    },
    // quay lại
    nextSong: function(){
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex =0
        }
       this.loadCurrentSong()
    },
    // Xử lí sự kiện
    handleEvent: function() {
     
    //   xử lí chơi nhac
     playBtn.onclick = function () {
        audio.play()
     }
     // xử lí dừng
     pauseBtn.onclick = function() {
        audio.pause()
    
    },
        // time chới nhạc

    audio.ontimeupdate = function() {
        if(audio.duration){
         const progressPercent = Math.floor(audio.currentTime/audio.duration*100)
         progress.value = progressPercent
        }
     }

     // tua
     progress.onchange = function(e) {
       const seekTime = audio.duration/100 * e.target.value
       audio.currentTime = seekTime
     }

     // next bài
     nextBtn.onclick = function() {
        app.nextSong()
        audio.play()
     }
    },
    start: function(){
        this.handleEvent()
      this.render()
   this.defineMusic()
   this.loadCurrentSong()
    }
}
app.start()