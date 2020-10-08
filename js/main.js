// This function is called onclick and the url is sent as parameter link

const newLink = link => {
  let win = window.open(`https://` + link, "_blank");
  if (win) {
    //Browser has allowed it to be opened
    win.focus();
  } else {
    //Browser has blocked it
    alert("Please allow popups for this website");
  }
};

$(document).ready(function () {
  $('.sidenav').sidenav();
});


// Scroll Down and Scroll Up events

// let lastScrollTop = 0;
// $(window).scroll(function(event){
//    let st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        // downscroll code
//        $('.footer').hide();
//    } else {
//       // upscroll code
//       $('.footer').show();
//    }
//    lastScrollTop = st;
// });


// Getting infos about repos deom github api

let repo_url = `https://api.github.com/users/devscollab/repos`
async function getRepos() {
  let response = await fetch(repo_url);
  let data = await response.json()
  return data;
}



// VUE JS
var vm = new Vue({
  el: '#app',
  data: {
    list: null,
    desc: 'https://www.google.com'
  },
  created() {
    getRepos()
      .then(data => {
        this.list = data

        //console.log(data[0])
      });
  }
})

var rellax = new Rellax('.rellax');