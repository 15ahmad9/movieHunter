let term = '';
const updateTerm = () => {
    term = document.getElementById('searchTerm').value;
    
        const contaner = document.getElementById('songs');
        while (contaner.firstChild) {
            contaner.removeChild(contaner.firstChild);
        }
        fetch(`https://itunes.apple.com/search?term=${term}`)
            .then((Response) => Response.json())
            .then((data) => {
                const artist = data.results;
                return artist.map(result => {

                    const res = document.createElement('article'),
                        artist = document.createElement('p'),
                        song = document.createElement('h4'),
                        img = document.createElement('img'),
                        audio = document.createElement('audio'),
                        audioSource = document.createElement('source')

                    artist.innerHTML = result.artistName;
                    song.innerHTML = result.trackName;
                    img.src = result.artworkUrl100;
                    audioSource.src = result.previewUrl;
                    audio.controls = true;

                    res.appendChild(img);
                    res.appendChild(artist);
                    res.appendChild(song);
                    res.appendChild(audio);
                    audio.appendChild(audioSource);
                    contaner.appendChild(res);
                })
            })
            .catch(error => console.log('Request failed:', error))
}

const search = document.getElementById('searchTermBtn');
search.addEventListener('click', updateTerm)

document.addEventListener('play', event => {
    const audio = document.getElementsByTagName('audio');
    for (let i = 0; i < audio.length; i++) {
        if (audio[i] != event.target) {
            audio[i].pause();
        }
    }
}, true)