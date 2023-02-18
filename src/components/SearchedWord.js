// Icon Import
import PlayIcon from './assets/images/icon-play.svg';
// styling
import '../components/styling/css/SearchedWord.css'

function SearchedWord({ searchedWord, data }){

    // variables
    let phonetic = '';
    let audioPath = '';

    // if data is defined
    if(data){
        phonetic = data[0].phonetic;
        let phonetics = data[0].phonetics;
        
        // get the audio path from the "phonetics" array
        for(var i = 0; i < phonetics.length; i++)
            if(phonetics[i].audio)
                {
                    audioPath = phonetics[i].audio;
                    break;
                }
    }

    // event handles
    const handleClick = () => {
        if(audioPath){
            const audio = new Audio(audioPath);
            audio.play();
        }
    }

    return (
        // declare searchedword in app.js
        <div className="SearchedWord">
            <div className="word">
                <h1>{ searchedWord }</h1>
                <span>{ phonetic }</span>
            </div>
            <img onClick={ handleClick } className="pronunciacion" src={ PlayIcon } alt="play icon"></img>
        </div>
    );
}

export default SearchedWord;