export function addListeners() {
	const submitBtn = document.querySelector('#city-form-submit');
	submitBtn.addEventListener('click', (event) => {
		event.preventDefault();
		const cityName = document.querySelector('#city-name-input').value;
	});
}


	
	
