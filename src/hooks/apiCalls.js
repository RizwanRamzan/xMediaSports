// import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
// import { setLoader } from '../Redux/Reducers/gernalSlice';




function getUrl(route, baseurl) {
    if (baseurl == false) {
        return route;
    } else {
        return `${route}`
    }
}



const apiCall = async (method, payload, route, baseurl, onSuccess, onError) => {
    try {
        const url = getUrl(route, baseurl);
        let response = null
        
        let config = {
            method: method,
            maxBodyLength: Infinity,
            data: payload,
            url: url,

        };
        response = await axios.request(config);
        if (response?.data?.code == 200) {
            onSuccess(response.data);
            // stopLoader && store.dispatch(setLoader(false));
            return { status: 200, response: response.data };
        } else {
            onError(response);
            // SimpleToast.show(typeof e.response?.data.message == 'string' ? e.response?.data.message : 'Server error');
            // stopLoader && store.dispatch(setLoader(false));
            return response;
        }
    }
    catch (e) {
        // SimpleToast.show(typeof e.response?.data.message == 'string' ? e.response?.data.message : 'Server error');
        onError(e.response?.data);
        // store.dispatch(setLoader(false));
        return {
            status: 400,
            response: e?.response?.data ? e?.response?.data : { message: e.toString() },
        };
    }
}

export const getRequest = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (err) => { }) => {
    console.log(payload,"payload")
    await apiCall('get', payload, route, baseurl, onSuccess, onError);
};

export const postRequest = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (err) => { }) => {
    await apiCall('post', payload, route, baseurl, onSuccess, onError);
};

export const patchRequest = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (err) => { }) => {
    await apiCall('patch', payload, route, baseurl, onSuccess, onError);
};

export const putRequest = async (payload, route, baseurl, onSuccess = () => { }, onError = () => { }) => {
    await apiCall('put', payload, route, baseurl, onSuccess, onError);
};

export const deleteRequest = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (err) => { }) => {
    await apiCall('delete', payload, route, baseurl, onSuccess, onError);
};

export const putRequestFormData = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (res) => { }) => {
    try {

        const url = getUrl(route, baseurl);
        const formData = new FormData();
        let response = null;
      
        for (let key in payload) {
            formData.append(key, payload[key])
        }
        response = await axios.put(url, formData)
        if (response?.data?.code == 200) {
            onSuccess(response.data);
            // stopLoader && store.dispatch(setLoader(false));
            return { status: 200, response: response.data };
        } else {
            onError(response);
            // stopLoader && store.dispatch(setLoader(false));
            return response;
        }
    }
    catch (e) {
        onError(e);
        console.log('__post request form data error', e.response?.data)
        // SimpleToast.show(typeof e.response?.data.message == 'string' ? e.response?.data.message : 'Server error');
        return {
            status: 400,
            response: e?.response?.data ? e?.response?.data : { message: e.toString() },
        };
    }
};


export const postRequestFormData = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (res) => { }) => {
    try {
        
        const url = getUrl(route, baseurl);
        const formData = new FormData();
        let response = null;
        
        for (let key in payload) {
            formData.append(key, payload[key])
        }
        
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            data: formData,
            url: url,
            headers: { 'Content-Type': 'application/json' },
        }
        
        // const headers = {
        //     'Content-Type': 'multipart/form-data',
        //     'x-sh-auth': token
        // };
        
        
        
        response = await axios.request(config);
        // response = await axios.post(url, formData, { headers })


        if (response?.data.length) {
            onSuccess(response.data);
            // stopLoader && store.dispatch(setLoader(false));
            return { status: 200, response: response.data };
        } else {
            // console.log('error___', response)
            onError(response);
            // stopLoader && store.dispatch(setLoader(false));
            return response;
        }
    }
    catch (e) {
        onError(e);
        console.log('__post request form data error', e.response?.data)
        // stopLoader && store.dispatch(setLoader(false));
        // SimpleToast.show(typeof e.response?.data.message == 'string' ? e.response?.data.message : 'Server error');
        return {
            status: 400,
            response: e?.response?.data ? e?.response?.data : { message: e.toString() },
        };
    }
};

