import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routs";

axios.defaults.baseURL = "http://localhost:5173/api/";

axios.interceptors.response.use(response => {
    return response;
}, (error: AxiosError) => {
    const {data,status} = error.response as AxiosResponse;
    switch (status) {
        case 400:
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);  
            break;  
        case 404:
            toast.error(data.title);  
            break;  
        case 500:
            router.navigate('/server-error', {state: {error: data, status:status}});  
            break;
       default:
           break;   
    }   
    return Promise.reject(error.response);
})

const Errors = {
    get400Error: () =>  queries.get('error/bad-request') ,  
    get401Error: () =>  queries.get('error/unautohrized') ,  
    get404Error: () =>  queries.get('error/not-found') ,  
    get500Error: () =>  queries.get('error/server-error') ,  
    getValidationError: () =>  queries.get('error/validation-error') ,  

}



const queries={ 
    get : (url:string)=>   axios.get(url).then((response : AxiosResponse) => response.data ),
    post : (url:string,body : {})=>   axios.post(url,body).then((response : AxiosResponse) => response.data ),
    put : (url:string,body : {})=>   axios.put(url,body).then((response : AxiosResponse) => response.data ),
    delete : (url:string)=>   axios.delete(url).then((response : AxiosResponse) => response.data ),
}

const Catalog = { 
    list: () => queries.get("products"),
    Details: (id:number) => queries.get(`products/${id}`)
}

const requests ={
    Catalog,Errors
}

export default requests;