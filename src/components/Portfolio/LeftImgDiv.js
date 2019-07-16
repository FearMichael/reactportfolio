import React from 'react';

function LeftImgDiv(props) {

    return (
        <div className="row nomargin pl portfolio-info" key={props.portInfo.name.toString()}>
            <div className="container col l4 offset-l2 s12 valign-wrapper">
                <img className="portfolio-img" src={props.portInfo.picture} alt={props.portInfo.name} />
            </div>
            <div className="container col l4 s12 pl center-align">
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
        </div>
    )
}
export default LeftImgDiv;