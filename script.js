addBtn.addEventListener("click", addNameToLS);

function addNameToLS() {
	let name = document.getElementById("name").value;
	localStorage.setItem('name', name);
}