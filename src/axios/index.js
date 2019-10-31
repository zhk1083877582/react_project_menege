import JsonP from "jsonp";
import axios from 'axios';
import { Modal } from "antd";
export default class Axios{
  static jsonP(options){
    return new Promise( (resolve,reject) => {
      JsonP(options.url,{
        param:'callback'
      },function(err,reponse){
        if(reponse.status === 'success'){
          resolve(reponse)
        } else {
          reject(reponse.message)
        }
      })
    })
  }

  static Get(option){
    let loading;
    console.log(111)
    if(option.data && option.data.isShowloading !== false){
      loading = document.getElementById('ajaxLoading');
      loading.style.display = 'block'
    }
    let baseUrl = 'https://easy-mock.com/mock/5dba4437727c0077ea997b7d/ManagementApi'
    return new Promise((resolve,reject)=>{
      axios({
        url: option.url,
        method: 'get',
        baseURL: baseUrl,
        timeout: 5000,
        params: (option.data && option.data.params) || ''
      }).then((response)=>{
        if(option.data && option.data.isShowloading !== false){
          loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none'
        }
        if(response.status === 200){
          let res = response.data.data
          console.log(res)
          if(res.code === 0){
            resolve(res);
          }else{
            Modal.info({
              title:'提示',
              content:res.msg
            })
          }
        }else{
          if(option.data){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'none'
          }
          reject(response.data)
        }
      }).catch((e) => {console.log(e)})
    });
  }
}