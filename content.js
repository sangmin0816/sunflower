console.log("content");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage() {
  console.log("start");
  document.querySelectorAll("#content-text.style-scope.ytd-comment-renderer").forEach((x) => {
    var text = x.textContent;
    if(!x.classList.contains("sunflower")){
        query(String(text)).then((result) => {
        if(result!="{\"error\":\"overloaded\"}"){
          labels = result.substring(11, result.indexOf(','))
          if(labels!="\"None\""){
              x.innerHTML = "🌻SUNFLOWER🌻"+labels;
          }
          x.classList.add("sunflower");          
        }
      })
      .catch((error)=>{
        console.log(error)
      });
    };
  });
}

async function query(data) {
  setTimeout(40);
  if(data.length>300){
    data = data.substring(0,300);
  }
  const response = await fetch(
    "https://api-inference.huggingface.co/models/sgunderscore/hatescore-korean-hate-speech",
    {
      headers: {
        Authorization: "",
      },
      method: "POST",
      body: JSON.stringify(data),
      article: JSON.stringify(data)
    }
  );
  const json_result = await response.json()
  const str_response = JSON.stringify(json_result)
  return str_response;
}

function comment_loaded(){
  const cL = document.querySelector("#content-text.style-scope.ytd-comment-renderer")
  if(cL!=null){
    setInterval(gotMessage, 3600);
  }
  else{
    setTimeout(comment_loaded, 1000);
  }
}

comment_loaded();