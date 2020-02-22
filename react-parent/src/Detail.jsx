import React, { useEffect } from 'react';
import datasource from  './datasource';


function loadJs(url, callback){
  var script = document.createElement('script');
  script.type="text/javascript";
  if(typeof(callback) != "undefined"){
    if(script.readyState){
      script.onreadystatechange=function(){
        if(script.readyState == "loaded" || script.readyState == "complete"){
          script.onreadystatechange=null;
          callback();
        }
      }
    }else{
      script.onload = function(){
        callback();
      }
    }
  }
  script.src=url;
  document.body.appendChild(script);
}


export default function Detail({ match }) {
  const id = match.params.id;
  const item = datasource.find(item => item.id == id);

  useEffect(() => {
    loadJs("http://localhost:8082/main.js");
    location.hash = '#supplier';
    console.log(55555)
  }, []);

  return (
    <div style={{ lineHeight: 1 }}>
      <h2>{item.name}</h2>
      <p>价格：{item.price}</p>
      <p>库存：{item.stock}斤</p>
      <p>产地：{item.from}</p>

      <div style={{ padding: 20, border: '1px solid #ddd '}}>
        <h3>供应商信息<span style={{ color: 'red' }}>（子系统）</span></h3>
        <div id="childApp"></div>
      </div>
    </div>
  )
}