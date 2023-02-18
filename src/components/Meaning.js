import './styling/css/Meaning.css';

function Meaning({ meaning }){
    const partOfSpeach = meaning.partOfSpeech;
    const definitions = meaning.definitions;
    // list of definitions and examples
    const definitionsList = definitions.map((definition, id) => <li key={ id }>
        <span>{ definition.definition }</span>
        {definition.example && <span className="example">{ `“${definition.example}”` }</span>}
        </li>);
    const synonyms = meaning.synonyms.join(", ");
    const antonyms = meaning.antonyms.join(", ");

    return(
        <div className="Meaning">
            <div className="partOfSpeach">
                <span>{ partOfSpeach }</span>
                <hr></hr>
            </div>
            <div className="def">
                <span>Meaning</span>
                <ul>
                    { definitionsList }
                </ul>
            </div>
            {synonyms && <div className="synonyms">
                <span>Synonyms</span>
                <p>
                    { synonyms }
                </p>
                
            </div>}
            {antonyms && <div className="antonyms">
                <span>Antonyms</span>
                <p>
                    { antonyms }
                </p>
            </div>}
        </div>
    );
}

export default Meaning;