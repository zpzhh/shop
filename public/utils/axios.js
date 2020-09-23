import axios from "axios";

const {get,post}=axios;

let options={
    url:'',
    method:'get',
    baseURL:'',
    transformRequest:[function(){}],
    header:[],
    params:{

    },
    paramsSerializer:function(params){

    },
    data:{

    },
    timeout:1000,
    withCredentials:false,
    adapter:function(config){

    },
    auth:{

    },
    responseType:'json',
    responseEncoding:"utf8",
    xsrfCookieName:'XSRF-TOKEN',
    xsrfHeaderName:'X-XSRF-TOKEN',
    onUploadProgress:function(progress){

    },
    onDownloadProgress:function(progress){

    },
    maxContentLength:2000,
    validateStatus:function(status){

    },
    maxRedirects:5,
}


function define(defaultOptions){
   return function request(defineOptions){
       return axios(defineOptions||defaultOptions);
   }
}

export function _get(url,options){
      let _options=options||{};
      let _url=url||'';
       return get(_url,_options);
}

export function _post(url,options){
         let _options=options||{};
         let _url=url||'';
         return post(_url,_options);
}

export const requestData=define(options);