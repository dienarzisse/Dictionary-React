import './styling/css/NotFound.css';


function NotFound(){
    return(
        <div className="NotFound">
            <div className="emoji">😕</div>
            <span>No Definitions Found</span>
            <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>
    );
}

export default NotFound;