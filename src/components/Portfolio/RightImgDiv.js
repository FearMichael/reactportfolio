import React from 'react';

function RightImgDiv(props) {
    return (
        <div className="row nomargin pl portfolio-info reverse" key={props.portInfo.name.toString()}>
            <div className="container col l4 s12 pl offset-l2 center-align">
                <h3>{props.portInfo.name}</h3>
                <p>{props.portInfo.description}</p>
                <p className="tools">Tools Used:</p>
                <hr className="toolsLine"></hr>
                <ul>
                    {
                        props.portInfo.tools.map(tool => {
                            return (
                                <li key={tool.toString()}>{tool}</li>
                            )
                        })
                    }
                </ul>
                <a href={props.portInfo.deployedLink} target="_blank" rel='noreferrer noopener' className="btn btn-lg">Check it out</a>
            </div>
            <div className="container col l4 s12">
                <img className="portfolio-img" src={props.portInfo.picture} alt={props.portInfo.name} />
            </div>
        </div>
    )
}
export default RightImgDiv;