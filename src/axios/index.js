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

  static ajax(option){
    let baseUrl = ''
    return new Promise((resolve,reject)=>{
      axios({
        url: option.url,
        method: option.method,
        baseURL: baseUrl,
        timeout: 5000,
        params: (option.data && option.data.params) || ''
      }).then((response)=>{
        if(response.status === '200'){
          let res = response.data
          if(res.code === 0){
            resolve(res);
          }else{
            Modal.info({
              title:'提示',
              content:res.msg
            })
          }
        }else{
          reject(response.data)
        }
      })
    });
  }
}