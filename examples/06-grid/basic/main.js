{
	const currentYear = new Date().getFullYear();
	const elCurrentYear = document.getElementById('current_year');
	const text = document.createTextNode(currentYear);
	elCurrentYear.appendChild(text);
}