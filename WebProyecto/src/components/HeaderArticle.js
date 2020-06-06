import React, {Component} from "react";

class HeaderArticle extends Component{
    render(){
        return(
            <header className="headerArticle">
                <div className="confus">
                    <div className="categoriesTop">
                        <span className="in">in: </span>
                        <div className="categoriesList">
                            <a>Characters</a>
                            , &nbsp;
                            <a>Tech Savvy</a>
                            , &nbsp;
                            <a>Web Devs</a>
                        </div>
                    </div>
                    <div className="articleTitle">
                            <span>Martin</span>
                        </div>
                </div>
                <div className="options">
                        <div className="edit">
                            <span>edit</span>
                        </div>
                        <a className="comments">comments</a>
                        <a className="share">share</a>
                    </div>
            </header>
        )
    }
}

export default HeaderArticle;