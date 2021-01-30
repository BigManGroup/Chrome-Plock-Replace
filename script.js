// Saves options to chrome.storage
function save_options() {
    var pwordUpdate = document.getElementById('pword-update').checked;
    chrome.storage.sync.set({
        pwordUpdate: pwordUpdate
    });
}

function restore_options() {
  chrome.storage.sync.get({
      pwordUpdate: true
  }, function(items) {
    document.getElementById('pword-update').checked = items.pwordUpdate;
  });
}

function updatePage(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type:"update-p-word"});
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('pword-update').addEventListener('click', save_options);
document.getElementById('update-page').addEventListener('click', updatePage);
