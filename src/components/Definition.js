import Meaning from './Meaning';
//css
import './styling/css/Definition.css';


function Definition({ data }){

    // list of meanings
    let List = [];

    // if data exists
    if(data){
        const meanings = data[0].meanings;
        List = meanings.map((meaning, id) => <Meaning key={ id } meaning={meaning} />);
    }
    return (
        <div className="Definition">
            { List }
        </div>
    );
}

export default Definition;