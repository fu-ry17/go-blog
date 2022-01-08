import axios from "axios";

export const getAPI = async (url: string, token?: string) =>{
       const res = await axios.get(`/api/${url}`,{
           headers: { Authorization: (token as string)}
       })
       return res
}

export const postAPI = async (url: string, post: object, token?: string) => {
    const res = await axios.post(`/api/${url}`, post, {
        headers: { Authorization: (token as string)}
    })

    return res
}

export const patchAPI = async (url: string, post: object, token?: string) => {
    const res = await axios.patch(`/api/${url}`, post, {
        headers: { Authorization: (token as string)}
    })

    return res
}

export const putAPI = async (url: string, post: object, token?: string) => {
    const res = await axios.put(`/api/${url}`, post, {
        headers: { Authorization: (token as string)}
    })

    return res
}

export const deleteAPI = async (url: string, token?: string) => {
    const res = await axios.post(`/api/${url}`, {
        headers: { Authorization: (token as string)}
    })

    return res
}