import Header from "./Header";
import './App.css';
import Project from "./Project";
import Line from "./assets/line.svg";
function MainContent(){
    return(
        <div>
            <Header></Header>
            <div className = "projects-container">
            <img src={Line} alt="Line" className="line" id = "line"/>
            <Project></Project>
            </div>
        </div>
    );
}

export default MainContent