if(useMessage === "interval") {
  setInterval(function() {
    renderToast(Math.floor(Math.random() * Math.floor(4)));
  }, 1000);
}

function addToast() {
  if(isNaN(useMessage)) {
    msg = Math.floor(Math.random() * Math.floor(4));
  } else {
    msg = useMessage;
  }
  renderToast(msg);
}

// Take a template and add it to the toasts container
function renderToast(msg) {
  var messages = document.getElementsByTagName('template'),
    target = document.getElementById('toasts'),
    addedMessage = messages[msg].content.cloneNode(true);

  target.appendChild(addedMessage);
}