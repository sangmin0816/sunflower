console.log("content");

chrome.runtime.onMessage.addListener(gotMessage);

chrome.storage.local.get(["switch"], function(result) {
  console.log('Value currently is ' + result.switch);
});

function gotMessage() {
  document.querySelectorAll("#content-text.style-scope.ytd-comment-renderer").forEach((x) => {
    var text = x.textContent;
    if(!x.classList.contains("sunflower")){
      query(String(text))
      .then((result) => {
        return result.json();
      })
      .then((json_result) => {
        label = json_result[0]['label'];
        return label
      })
      .then((label) => {
        if(label!="None"){
          x.innerHTML = "🌻SUNFLOWER🌻"+label;
        }
        x.classList.add("sunflower");
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
  const cL = document.querySelector("#content-text.style-scope.ytd-comment-renderer")
  if(cL!=null){
    chrome.storage.local.get(["switch"], function(result) {
      if(result.switch==true){
        setInterval(gotMessage, 1800);
      }
    });
  }
  else{
    setTimeout(comment_loaded, 1000);
  }
}

comment_loaded();