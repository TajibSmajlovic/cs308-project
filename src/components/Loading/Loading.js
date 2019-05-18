import React from 'react';
import { connect } from 'react-redux'
import './Loading.css'

const Loading = (props) => {
    if (!props.loading) return null;
    
    return (
        <div className="loadingBox" >
            <div className="loader">

            </div>
        </div>
    );
};

export default connect(state => ({ loading: state.ui.loading }))(Loading);