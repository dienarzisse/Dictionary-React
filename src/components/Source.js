import './styling/css/Source.css';
// Icon import
import IconNewWindow from './assets/images/icon-new-window.svg';

function Source({ word }){
    const source = `https://en.wiktionary.org/wiki/${word}`
    return (
        <div className="Source">
            <hr></hr>
            <div className="source-link">
                <span>Source</span>
                <div className="link">
                    <a href={ source }>{ source }</a>
                    <img src={ IconNewWindow } alt="icon new window"></img>
                </div>
            </div>            
        </div>
    );
}

export default Source;