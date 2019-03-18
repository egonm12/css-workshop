// Start periodic addition of toast
if(useToast === 'interval') {
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

  updateCount();
}

function clearToasts() {
  var container = document.getElementById('toasts');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  updateCount();
}

// Take a template and add it to the toasts container
function renderToast(msg) {
  var messages = document.getElementsByTagName('template'),
    target = document.getElementById('toasts'),
    newToast = messages[msg].content.cloneNode(true);

  var randomID = Math.random().toString(36).slice(2);

  newToast.querySelector("li").setAttribute("aria-describedby", randomID);
  newToast.querySelector("p").setAttribute("id", randomID);

  target.prepend(newToast);

  updateCount();
}

// Show icon when we have one or more toasts visible
function updateCount() {
  var visibleToasts = document.getElementById('toasts').children.length,
    counterEl = document.querySelector('.counter');

  if(visibleToasts === 0 && counterEl) {
    counterEl.remove();
  } else if(visibleToasts > 0 && !counterEl) {
    var counterEl = document.createElement('div');
    counterEl.className = 'counter';
    document.querySelector('header').appendChild(counterEl);
  }
}
