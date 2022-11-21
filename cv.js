const xpList = document.querySelector(".xp-list");
const studiesList = document.querySelector(".right-side-ul");

const modalPopup = document.querySelector(".modal-popup");
const closeButton = document.querySelector(".closeModal");
const infoButton = document.querySelector(".btn-wrapper");

infoButton.addEventListener("click", () => {
	modalPopup.classList.add("open");
	modalPopup.classList.remove("closed");
});

closeButton.addEventListener("click", () => {
	modalPopup.classList.add("closed");
	modalPopup.classList.remove("open");
});

async function getJson() {
	const response = await fetch("experience.json")
		.then((response) => response.json())
		.then((response) => (data = response));

	const workData = data.work;
	console.log(workData);

	const studiesData = data.studies;
	console.log(studiesData);

	workData.forEach((element) => {
		console.log(element.name);
		xpList.innerHTML += `<li>${element.name}<br>
        ${element.position}<br>
        ${element.startYear}-${element.endYear}</li>`;
	});

	studiesData.forEach((element) => {
		console.log(element.name);
		studiesList.innerHTML += `<li>${element.name}<br>
        ${element.studyName}<br>
        ${element.startYear}-${element.endYear}</li>`;
	});
}
getJson();
