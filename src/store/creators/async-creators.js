import { storage } from '../../utility/firebase'
import axios from '../../utility/axios'
import { startLoading, endLoading } from './ui-creators';
import { setData, storeCookies } from './auth-creators'

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

const getMostRecent = () => dispatch => axios.get('/event/most-recent')

const getAll = () => dispatch => axios.get('/event/all')

export const getEvents = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(startLoading())
        Promise.all([getMostRecent()(), getAll()()])
            .then(res => {
                dispatch(endLoading())
                resolve(res)
            })
    })
}

export const register = (data) => dispatch => {
    dispatch(startLoading())
    axios.post('/user/register', {
        ...data
    }).then(res => {
        dispatch(setData(res.data))
        storeCookies(res.data)
        dispatch(endLoading())
    }).catch((err) => {
        console.log(err)
        dispatch(endLoading())
    })
}

export const login = (data) => dispatch => {
    dispatch(startLoading())
    axios.post('/user/login', { ...data })
    .then(res => {
        dispatch(setData(res.data))
        storeCookies(res.data)
        dispatch(endLoading())
    })
    .catch((err) => {
        console.log(err)
        dispatch(endLoading())
    })
}