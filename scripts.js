const darkMode = document.getElementById('dark');
const mainElement = document.getElementById('main');
darkMode.addEventListener("click", ()=> {
	mainElement.classList.toggle("dark");
})