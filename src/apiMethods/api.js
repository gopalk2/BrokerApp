import axios from "axios";


// ------get API Request
export const fetchData = async (url) => {
    try {
        const res = await axios.get(url);
        return res?.data?.data
    } catch (err) {
        console.log(err);
    }
};

export const AddUpadate = async (url, postData) => {
    const res = await axios.put(url, postData);
    // console.log(res)
    return res
}

export const Upadate = async (url, postData) => {
    const res = await axios.post(url, postData);
    // console.log(res)
    return res
}

// -------get DATA API With Post Request
export const fetchPostData = async (url, postData) => {
    try {
        const res = await axios.post(url, postData);
        // console.log(res)
        return res
    } catch (error) {
        console.log(error)
    }
};

export const getSingnedUrl = async (data, file) => {
    // const access_token = sessionStorage.getItem('Token') ? sessionStorage.getItem('Token') : '';
    const res = await axios.post('file/signed-url', { fileName: data });
    // console.log(res.data.data.url)
    if (res.status == 200) {
        const url = res.data.data.url?.split('?')[0]
        uploadFormData(res.data.data.url, file)
        return url
    }
}

const uploadFormData = async (url, file) => {
    try {
        const res = await fetch(url, {
            method: "PUT", body: file,
            headers: {
                'Content-Type': file.type
            }
        })
    } catch (error) {
        console.log(error)
    }
}