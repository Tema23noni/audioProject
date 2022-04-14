const play = document.querySelector('#play'),
    play1 = document.querySelector('#playSng'),
    title = document.querySelector('#name'),
    audio = document.querySelector('#audio'),
    index = document.querySelector('#num'),
    time = document.querySelector('#time'),
    next = document.querySelector("#next"),
    next1 = document.querySelector('#next1')
    
    
console.log(time)
const songs = ['Уфф деньги','Солнце Монако']
let songIndex = 1;
let img = document.querySelector('#sng')
let img2 = document.querySelector('#sng2')
let s = img.src;
function loadSong(song){
    title.innerHTML = song;
    audio.src = `audio/${song}.mp3`
    index.innerHTML = songIndex + 1   
}
audio.onloadedmetadata = function() {
    let s1 = Math.floor(audio.duration % 60)<10? '0'+Math.floor(audio.duration % 60): Math.floor(audio.duration % 60);
    let m1 = Math.floor(audio.duration / 60)<10? '0'+Math.floor(audio.duration / 60): Math.floor(audio.duration / 60)
    
    time.innerHTML = m1 +':'+s1

  };
loadSong(songs[songIndex])
function playSong(){
    audio.play()
    img.src =`img/${1}.png`
    img2.src = `img/${1}.png`
}
function stopSong(){
    audio.pause()
    img.src =`img/${2}.png`
    img2.src = `img/${2}.png`
}
play.addEventListener('click', ()=>{
    let isPlay = s;
    if(isPlay == img.src){
        playSong()
        
    }else{
        stopSong()
    }

})
play1.addEventListener('click', ()=>{
    let isPlay = s;
    if(isPlay == img.src){
        playSong()
    }else{
        stopSong()
    }


})
function nextSong(){
    songIndex++;
    
    if(songIndex === songs.length){
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}
next.addEventListener('click', nextSong)
function upDate(e){
    
    const {duration, currentTime} = e.srcElement
    let m = Math.floor((duration - currentTime)/60)
    let s = Math.floor((duration-currentTime)%60)
    if(m<10){
        min = '0' + m;
        if(s <10){
           sec = '0'+ s 
        }else{
            sec = s
        }
    }else{
        min = m
    }
    time.innerHTML = min+':'+sec
}
audio.addEventListener('timeupdate', upDate)