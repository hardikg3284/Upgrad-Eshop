export const fetchAllCategories = (accessToken) => {
	return new Promise((resolve, reject) => {
	  fetch('http://localhost:3001/api/v1/products/categories', {
		method: 'GET',
		headers: {
		  'x-auth-token': accessToken,
		},
	  })
		.then((response) => {
		  if (!response.ok) {
			throw new Error("Server error occurred.");
		  }
		  return response.json();
		})
		.then((json) => {
		  // Capitalize and filter unique categories
		  const categories = ["ALL", ...new Set(json.map(category => category.toUpperCase()))].sort();
		  resolve({ data: categories });
		})
		.catch((error) => reject({ reason: error.message }));
	});
  };
  