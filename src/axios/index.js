import JsonP from "jsonp";

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
}