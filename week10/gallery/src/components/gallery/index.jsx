import React, { Component } from 'react';
import Slider from './slider';

class Gallery extends Component {
    static defaultProps = {
        title:"Defult Title"
    };
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }
    componentDidMount() {
     fetch('https://api.myjson.com/bins/1f8zmq')
     .then(raw => raw.json())
     .then(data => {
         this.setState({
             photos: data
         })
     })
        }
    render() {
        const {
            title
        } = this.props;
        const {
            photos
        } = this.state;
        return (
            <div className="wrapper">
              <h1>{title}</h1>
              <p>{photos.length}</p>
             {photos.length ? <Slider photos={photos}/> : "...loading"}
            </div>
        );
    }
} 

export default Gallery;