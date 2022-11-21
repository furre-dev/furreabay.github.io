const url = "https://api.github.com/users/furreabay/repos";
const repoUl = document.querySelector(".repo-ul");
const loadingScreen = document.querySelector(".loadingScreen");

let loaded = false;

async function fetchApi() {
	const response = await fetch(url)
		.then((response) => response.json())
		.then((response) => (data = response));

	console.log(data);

	data.forEach((obj) => {
		const leftLi = document.querySelectorAll(".left-li");
		const rightLi = document.querySelectorAll(".right-li");

		if (obj.private !== false) {
			return;
		}
		if (obj.name === obj.owner.login) {
			return;
		}
		repoUl.innerHTML += `<li class="right-li">${obj.name}<br>
            <p class"github-description">${obj.description}</p><br>
            <a href="${obj.html_url}" class="github-link">Click to get to the github repo!<a/></li>`;
		console.log(obj.name);
		console.log(obj.html_url);
	});
	loaded = true;

	if (loaded === true) {
		loadingScreen.classList.add("notloading");
		console.log(loaded);
	} else {
		console.log("still loading");
	}
}

fetchApi();
