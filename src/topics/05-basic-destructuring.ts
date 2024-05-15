
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "mess",
    details: {  
        author: "John", 
        year: 2001 
    },
}

const {song: anotherSong, songDuration: duration, audioVolume: volume  } = audioPlayer

const {author, year} = audioPlayer.details

console.log('song:', anotherSong, duration, volume, author, year);

export {};