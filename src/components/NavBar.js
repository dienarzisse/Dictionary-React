// Icon imports
import Logo from './assets/images/logo.svg';
import Moon from './assets/images/icon-moon.svg';

// styling
import './styling/css/NavBar.css';

function NavBar({darkMode, setDarkMode, setFontStyle}){
    // event handlers
    const handleCheck = (event) => {
        setDarkMode(event.target.checked);
    }
    const handleSelect = (event) => {
        setFontStyle(event.target.value);
    }
    return (
        <div className="NavBar">
            <div className="logo">
                <img src={ Logo } alt="logo"></img>
            </div>
            <div className="settings">
                <div className="dropdown">
                    <select onChange={ handleSelect }className={ darkMode ? "selectDark":""} name="text-style" id="text-style">
                        <option className="sans" value="sans">Sans</option>
                        <option className="serif" value="serif">Serif</option>
                        <option className="mono" value="mono" selected>Mono</option>
                    </select>
                </div>
                <div className="separator"></div>
                <div className="theme-design">
                    <label className="switch">
                        <input onChange={ handleCheck } type="checkbox" checked={ darkMode }></input>
                        <span className="slider round"></span>
                    </label>
                    <img className={ darkMode ? "MoonIconDark":"MoonIcon" } src={ Moon } alt="theme icon"></img>
                </div>
            </div>
        </div>
    );
}

export default NavBar;