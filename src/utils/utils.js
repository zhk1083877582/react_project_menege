export default{
  formatDate(time){
    if(!time) return ''
    let date = new Date();
    return date.getFullYear() + '-'+(date.getMonth()+1)+'-'+date.getDate()+'  '+date.getHours()+':'+ date.getMinutes()+':'+date.getSeconds()
  }
}