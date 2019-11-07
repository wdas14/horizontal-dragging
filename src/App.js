import React from 'react';
// https://www.npmjs.com/package/react-easy-crop
import Cropper from 'react-easy-crop';
import './App.css';

import banner from './images/sw6-bgImg.png';

class App extends React.Component {
	constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            image: banner,
            crop: { x: 0, y: 0 },
            zoom: 1,
            aspect: 4 / 3
        }
        this.onCropChange = this.onCropChange.bind(this);
        this.onCropComplete = this.onCropComplete.bind(this);
        this.onZoomChange = this.onZoomChange.bind(this);
    }

    onCropChange(crop) {
        this.setState({ crop })
    }
     
    onCropComplete(croppedArea, croppedAreaPixels) {
        console.log(croppedArea, croppedAreaPixels)
    }
    
    onZoomChange(zoom) {
        this.setState({ zoom })
    }
    
    render() {
        return (
            <div>                
                <Cropper
                    image={this.state.image}
                    crop={this.state.crop}
                    zoom={this.state.zoom}
                    aspect={this.state.aspect}
                    onCropChange={this.onCropChange}
                    onCropComplete={this.onCropComplete}
                    onZoomChange={this.onZoomChange}
                    style={{
                        containerStyle: {
                            height: '150px !important'
                        },
                        imageStyle: {
                            width: '810px !important',
                            height: 'auto'
                        },
                        cropAreaStyle: {
                            width: '810px !important',
                            height: '150px !important'
                        }
                    }}
                />
            </div>
        )
    }
}

export default App;
