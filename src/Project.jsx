//template project
import './Project.css';
function Project() {
    return (
        <div className="project flex-center margin-top">

            <div className="description">
                <h3>CARBYON MAP PROJECT</h3>
                <div className="description-details">
                    <div className="lineCont">
                        <div className = "vertical"></div>
                    </div>
                    <div className = "textCont">
                         <h4>Interactive colormap application</h4>
                            <p>Business tool that helped improve the company's workflow, 
                            displaying key information about machine placements all around the world.</p>
                            <span>&#10509;&nbsp;</span><a class="link fontSize"
                                        href="https://github.com/MKuneva/Portfolio/tree/main/CarbyonApp">Go
                                        to Git Repository</a>

                                    <p>Developed using:</p>
                                    <p>Python, Panel, Folium, Geopandas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
