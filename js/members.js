// This function is called onclick and the url is sent as parameter link

// let YOUR_ACCESS_TOKEN = "Token needed"

// Fetch with token

// fetch(url, {
//     headers: {
//       'Authorization': `token ${YOUR_ACCESS_TOKEN}`,
//     }
//   })


const newLink = (link) => {
  let win = window.open(`https://` + link, "_blank");
  if (win) {
    //Browser has allowed it to be opened
    win.focus();
  } else {
    //Browser has blocked it
    alert("Please allow popups for this website");
  }
};

// JS

const app = document.getElementById("app");

let repo_url = `https://api.github.com/orgs/devscollab/members`;
async function getRepos() {
  let response = await fetch(repo_url);
  let data = await response.json();
  return data;
}

async function getProfile(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}


async function getStarred(name) {
  let starred_api = `https://api.github.com/users/${name}/starred`
  let response = await fetch(starred_api);
  let data = await response.json();
  return data;
}

// https://api.github.com/repos/devscollab/devscollab.github.io/collaborators{/collaborator}
// https://api.github.com/orgs/devscollab/repos

async function getProfileObj() {
  let members = await getRepos();
  members.forEach(async (member) => {
    let user = await getProfile(member.url);
    let stars = await getStarred(member.name);
    let website = ""
    if (user.blog != "") {
      website = `<a class="primary" href=${user.blog} target="_blank"> WEBSITE </a>`
    } else {
      website = ``
    }

    let profile = document.createElement("div");
    profile.classList.add("card");
    profile.innerHTML = `

    <div class="cover-photo">
    <span class="pro">PRO</span>
    <img src="${user.avatar_url}" class="profile">
    </div>
    <div class="profile-name">${user.login}</div>
    <p class="bio">${user.bio != null ? user.bio : ""}</p>

    <div class="info">
    <span><i class="far fa-star"></i> Stars : ${stars.length}</span>

    <span><i class="fas fa-user-friends"></i> Followers : ${user.followers} </span>
    <span><i class="far fa-check-circle"></i> Following : ${user.following} </span>
    </div>

    <div class="buttons">
      <a class="primary ghost" href="${member.html_url}" target="_blank"> FOLLOW </a>
      ${website}
    </div>



    `;
    app.appendChild(profile);
  });
}

getProfileObj();

// <button class="msg-btn">Message</button>
// <button class="follow-btn">Following</button>
// <div>
// <i class="fab fa-facebook-f"></i>
// <i class="fab fa-instagram"></i>
// <i class="fab fa-youtube"></i>
// <i class="fab fa-twitter"></i>
// </div>
// </div>

// // VUE JS
// var vm = new Vue({
//   el: "#app",
//   data: {
//     list: null,
//     profiles: null,
//     desc: "https://www.google.com",
//   },
//   created() {
//     getRepos().then((data) => {
//       this.list = data;
//       console.log(data);
//     });
//     getProfileObj().then((data) => {
//       this.profiles = data;
//       console.log(data);
//     })
//   },
// });


// ____________________________________________________________________________________________________________

// Skills for languages can be added in future

// <div class="skills">
// <h6>Skills</h6>
// <ul>
//   <li>UI / UX</li>
//   <li>Frontend Development</li>
//   <li>HTML</li>
//   <li>CSS</li>
//   <li>JavaScript</li>
//   <li>React</li>
//   <li>React</li>
//   <li>Node</li>
// </ul>
// </div>

// ____________________________________________________________________________________________________________