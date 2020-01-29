export const fetchNumber = ( value ) => {
	return fetch('/api/v1/get_nums', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify({ value })
	})
	.then(( response ) => response.json())
	.then((result) => {
		return result;
	})
	.catch((error) => {
		console.error('Error: ',error);
	})
};