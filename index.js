function load() {
    console.log("load event detected!");
    var name = window.localStorage.getItem('avartarName');
      if (name !== null) {
        document.querySelector('.namePlaceholder').innerHTML = name;
      } else {
          document.querySelector('.namePlaceholder').innerHTML = "Stranger";
      }
  }
  window.onload = load;