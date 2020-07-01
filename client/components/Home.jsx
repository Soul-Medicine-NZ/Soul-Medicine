import React from 'react'
import Footer from './Footer'


class Home extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="background">
            <img src="./img/logo.png" alt="Main Logo" className="mainLogo"></img>
            <div><i className="statement">"Empowering others with healing tools"</i>
            </div>
            <div className="width">
            <div className="homeLinks">
             <a className="gradient link">ABOUT</a>
             <a className="gradient link">GALLERY</a>
             <a className="gradient link">CONTACT</a>
             <a className="gradient link">MEDITATION</a>
            </div>
            </div>
            </div>
            <Footer />
            </React.Fragment>

        )
    }
}


export default Home