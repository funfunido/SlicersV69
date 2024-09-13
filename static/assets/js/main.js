function loadScript(src, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}

function loadCSS(href, callback) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  var supportsOnLoad = "onload" in link;
  if(supportsOnLoad) {
    link.onload = callback;
  }
  else {
    setTimeout(function() {
      callback();
    }, 1000);
  }
  document.head.appendChild(link);
}

loadCSS('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css', function() {
  console.log('[✔️] Bootstrap icons');
});
if(window.location.pathname === "/index.html" || window.location.pathname === "/") {
  console.log("[✔️] Index.html");
  const options = ["Right-Click to quickly access more features", "Set a custom background in settings if u want or if its laggy then disable particles", "Tab Cloaking. You don't have to.", "Ok kids, its time for your SIGMA MEAL SKIBIDI SLICERS!", "I definitely didn't fork this", "This is billy. |0| I love billy. I do not love minors.", "The fog is coming The fog is coming The fog is coming The fog is coming", "certified lover boy", "lil bro was born in 2024", "© Copyright 6969 DaFuqBoom. All Rights Reserved.", "I removed an ad for FREE MINECRAFT HOSTING CLICK HERE NOW. You're welcome.", "Want more links? womp womp", "brazil is a good country", "yo yo yo its you're favorite tooth, wizzy t!............................................. SHUT UP", "your life is nothing it serves zero purpose you should reset character now and give somebody a piece of that oxygen and ozone layer thats covered up so we can breathe inside this blue trapped bubble", "there is a 1 in 1 million chance you get this message if you get it you are super lucky", "will you NOT marry me?", "be be be be be be be bde be be beb be be be be be be ye", ];

  function getRandomOption() {
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
  }

  function setRandomPlaceholder() {
    const placeholder = document.getElementById("placeholder");
    placeholder.textContent = getRandomOption();
  }
  setRandomPlaceholder();
  var bar = document.querySelector(".browse-input");
  var search = document.getElementById("search");
  bar.addEventListener("focus", () => {
    search.style.marginLeft = "-367px";
  });
  bar.addEventListener("blur", () => {
    search.style.marginLeft = "-150px";
  });
  
  document.body.appendChild(img);
}
window.addEventListener("load", function() {
  loadScript("/worker.js");
  if(window.location.pathname === "/index.html" || window.location.pathname === "/") {
    if(window.innerWidth < 676) {
      location.href = "/mobile.html";
    }
  }
  if(window.location.pathname === '/loading.html') {
    if(window.innerWidth < 676) {
      var rm = document.querySelector('.themesExcluded');
      rm.style.display = 'none';
    }
  }
});