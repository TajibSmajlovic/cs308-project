import React from 'react';

import "./ImagePicker.css"

const ImagePicker = props => {
    return (
        <div className="imagePicker">
            <label>Image</label>
            <input className="btn" type="file" />
            <div className="previewBox">
                {/* background img */}
            </div>
        </div>
    );
};

export default ImagePicker;