// Start periodic addition of toast
if(useToast === "interval") {
  setInterval(function() {
    renderToast(Math.floor(Math.random() * Math.floor(3)));
  }, (toastInterval * 1000));
}

// Handle click on "Add toast" button
function addToast() {
  if(isNaN(useToast)) {
    msg = Math.floor(Math.random() * Math.floor(3));
  } else {
    msg = useToast;
  }
  renderToast(msg);
}

// Handle click on close button of toast
function closeToast(e) {
  e.parentNode.remove();
}

// Take a template and add it to the toasts container
function renderToast(msg) {
  var messages = document.getElementsByTagName('template'),
    target = document.getElementById('toasts'),
    newToast = messages[msg].content.cloneNode(true);

  target.appendChild(newToast);
}
