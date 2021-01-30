window.addEventListener('load', function load(event) {
    chrome.storage.sync.get({
        pwordUpdate: true
    }, function(items){
        if(items.pwordUpdate) walkText(document.body)
    });
});

function walkText(node) {
  if (node.nodeType == 3) {
    node.data = node.data.replace(/please|plz|pleaze|plox|plx|plis|pliz|pls/gi, "plock");
  }
  if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
    for (var i = 0; i < node.childNodes.length; i++) {
      walkText(node.childNodes[i]);
    }
  }
}

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
      switch(message.type) {
          case "update-p-word":
              walkText(document.body);
              break;
      }
  }
);