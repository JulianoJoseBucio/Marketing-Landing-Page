/*Gives active state to button in nav bar */
  document.getElementById("bton").addEventListener("mouseover", mouseOver);
  document.getElementById("bton").addEventListener("mouseout", mouseOut);

  function mouseOver() {
  document.getElementById("bton").style.color = "white";
}
  function mouseOut() {
  document.getElementById("bton").style.color = "black";
};


/*Changes color of text when mouse touches div */
  document.getElementById("maindiv").addEventListener("mouseover", mouseDiv);
  document.getElementById("maindiv").addEventListener("mouseout", divMouseOut);

  function mouseDiv() {
    document.getElementById("maindiv").style.color = "green";
}
  function divMouseOut() {
    document.getElementById("maindiv").style.color = "black";
};

/*Changes color of text in div when mouse is hovering */
  document.getElementById("caf").addEventListener("mouseover", bottomDiv);
  document.getElementById("caf").addEventListener("mouseout", bottomMouseOut);

  function bottomDiv() {
    document.getElementById("caf").style.color = "green";
}

  function bottomMouseOut() {
    document.getElementById("caf").style.color = "black";
};

/*Changes color of text in div when mouse is hovering */
  document.getElementById("btmbar").addEventListener("mouseover", lastMouseDiv);
  document.getElementById("btmbar").addEventListener("mouseout", lastMouseOut);

  function lastMouseDiv() {
    document.getElementById("btmbar").style.color = "green";
}

  function lastMouseOut() {
    document.getElementById("btmbar").style.color = "black";
};


/*Creates a popup when page is loaded that asks for E-Mail address input */
  function onLoadSubmit() {
    prompt("Please enter your email for updates!");
}

/*Used in button that scrolls to top of page once clicked */
  const mybutton = document.getElementByID("myBtn");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

/*All in navbar and will scroll to different sections of page when clicked */
  function myFunction() {
    const elmnt = document.getElementById("caf");
    elmnt.scrollIntoView();
}

  function downFunction() {
    const test = document.getElementById("btmbar");
    test.scrollIntoView();
}

  function bottomFunction() {
    const down = document.getElementById("footer");
    down.scrollIntoView();
};
