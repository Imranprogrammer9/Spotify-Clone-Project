//Initializing Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let playerSeekBar = document.getElementById('playerSeekBar');
let masterSongName = document.getElementById('masterSongName');
let songAnimation = document.getElementById('songAnimation');
let songTracks = Array.from(document.getElementsByClassName('songTracks'));
let songTrackPlay = document.getElementsByClassName('songTrackPlay');

//Songs Array
let songs = [
    { songName: "Ya Nabi Salam Alayka", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Ey Hasnain Ke Nana", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Janam Fida e Haidri", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Tammana Urdu Nasheed", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Zah-e-Muqadar", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Tasbih", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
]
songTracks.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//Click Handling
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        songAnimation.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        songAnimation.style.opacity = 0;
    }
})


//Events

//Audio Element Event
audioElement.addEventListener('timeupdate', () => {
    songPlayed = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    playerSeekBar.value = songPlayed;
})

playerSeekBar.addEventListener('change', () => {
    audioElement.currentTime = playerSeekBar.value * audioElement.duration / 100;
})


Array.from(document.getElementsByClassName('songTrackPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            songAnimation.style.opacity = 1;
        }
        else {
            audioElement.pause();
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            songAnimation.style.opacity = 0;
        }
    })
})

//Next And Previous Button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songAnimation.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songAnimation.style.opacity = 1;
})