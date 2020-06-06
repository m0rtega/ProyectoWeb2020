import React, {Component} from "react";
import Doge from "../../dist/imgs/Martin.png"

class headerWiki extends Component{
    render(){
         

        return(
            <header className="header1">
                <div className="wikiImage">
                    <img className="imageWiki" src={Doge} alt="Martin"></img>
                </div>
                <div className="wikiInfo">
                    <h3 className="wikiTitle">Job Seeker Wiki</h3>
                    <div className="wikiPages">
                        <span className="counterThingy">665</span>
                        <span className="pagesThingy">Pages</span>
                    </div>
                    <div className="socialThingies">
                        <a className="twitterThingy" href="https://twitter.com/_m0rtega"><span>Twitter</span></a>
                        <a className="githubThingy" href="https://github.com/Mec4no"><span>Github</span></a>
                    </div>
                </div>
                <nav className="navBarHeader1">
                    <ul className="decorationsList">
                        <li className="dec">Characters</li>
                        <li className="dec">Media</li>
                        <li className="dec">Miscellaneous</li>
                        <li className="dec">Explore</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default headerWiki;