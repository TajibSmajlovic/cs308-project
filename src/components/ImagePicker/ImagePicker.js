import React from 'react';

import "./ImagePicker.css"

class ImagePicker extends React.Component {

    changeHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            this.props.imgHandler(reader.result, file)
        }
    }

    render(){

        let bgStyles = {}
        if(this.props.img){
            bgStyles['backgroundImage'] = `url('${this.props.img}')`
        }else{
            bgStyles['backgroundColor'] = 'whitesmoke'
        }

        return (
            <div className="imagePicker">
                <label>Image</label>
                <input className="btn" type="file" onChange={this.changeHandler} />
                <div className="previewBox" style={bgStyles}>
                    {/* background img */}
                </div>
            </div>
        );
    }
};

export default ImagePicker;