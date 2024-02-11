console.log("content");

chrome.runtime.onMessage.addListener(gotMessage);

chrome.storage.local.get(["switch"], function(result) {
  console.log('Value currently is ' + result.switch);
});

function gotMessage() {
  document.querySelectorAll("ytd-comment-thread-renderer").forEach((x) => {
    if(!x.classList.contains("sunflower")){
      x.classList.add("sunflower");
      let text = x.querySelector("#content-text");
      let text_content = text.textContent;
      text.innerHTML = "";
  
      query(String(text_content))
      .then((result) => {
        return result.json();
      })
      .then((json_result) => {
        label = json_result[0]['label'];
        return label
      })
      .then((label) => {
        if(label=="None"){
          text.innerHTML = text_content;
        }
      })
      .catch((error) => {
        console.error(error);
      });
      
    }});
};

async function query(data) {
  if(data.length>300){
    data = data.substring(0,300);
  }

  var settings = {
    crossDomain: true,
    mode: 'cors',
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
  
  const response = await fetch("https://www.ewhasunflower.kro.kr/analyze", settings)
  
  return response;
}
  

function comment_loaded(){
  try{
    const cL = document.querySelector("#content.ytd-comment-thread-renderer")
    chrome.storage.local.get(["switch"], function(result) {
      if(result.switch==true){
        setInterval(gotMessage, 1800);
      }
    });
  }
  catch{
    setTimeout(comment_loaded, 1000);
  }
}

comment_loaded();