import { storage } from '../../utility/firebase'
import axios from '../../utility/axios'
import { startLoading, endLoading } from './ui-creators';

export const createEvent = (data, file) => {
    return dispatch => {
        return new Promise((resolve, reject) => {     
            dispatch(startLoading())
            uploadImg(file)
                .then(imgUrl => (
                    axios.post('/event', {
                        ...data,
                        imgUrl
                    })    
                ))
                .catch(err => {
                    console.log(err)
                    dispatch(endLoading())
                    reject(err)
                })
                .then(res => {
                    dispatch(endLoading())
                    // console.log(res)
                    resolve(res)
                })
        })
    }
}

const uploadImg = (data) => {
    //start loading
    return new Promise((resolve, reject) => {
        const name = `${data.name.substring(0, 3)}_${Date.now()}`;
        const uploadTask = storage.ref('images/' + name).put(data)
        uploadTask.on('state_changed', snapshot => {
            //showing progress
        }, err => {
            //end loading
            reject(err);
        }, () => {
            storage.ref('images').child(name).getDownloadURL().then(url => {
                //end loading
                resolve(url)
            })
        })
    })
}