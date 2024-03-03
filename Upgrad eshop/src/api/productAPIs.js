export const fetchAllProducts = (accessToken) => {
	return new Promise((resolve, reject) => {
	  fetch('http://localhost:3001/api/v1/products', {
		method: 'GET',
		headers: {
		  'x-auth-token': accessToken,
		},
	  })
		.then((response) => {
		  if (response.ok) {
			return response.json();
		  } else {
			throw new Error("Server error occurred.");
		  }
		})
		.then((json) => resolve({ data: json }))
		.catch((error) => reject({ reason: error.message }));
	});
  };
  
  export const createProduct = (requestJson, accessToken) => {
	return new Promise((resolve, reject) => {
	  fetch('http://localhost:3001/api/v1/products', {
		method: 'POST',
		body: JSON.stringify(requestJson),
		headers: {
		  'Content-type': 'application/json; charset=UTF-8',
		  'x-auth-token': accessToken,
		},
	  })
		.then((response) => {
		  if (response.ok) {
			return response.json();
		  } else {
			throw new Error("Server error occurred. Please try again.");
		  }
		})
		.then(() =>
		  resolve({
			message: `Product ${requestJson.name} added successfully.`,
		  })
		)
		.catch((error) => reject({ reason: error.message }));
	});
  };
  
  export const deleteProduct = (id, accessToken) => {
	return new Promise((resolve, reject) => {
	  fetch(`http://localhost:3001/api/v1/products/${id}`, {
		method: 'DELETE',
		headers: {
		  'x-auth-token': accessToken,
		},
	  })
		.then((response) => {
		  if (response.ok) {
			return response.json();
		  } else {
			throw new Error("Server error occurred.");
		  }
		})
		.then(() => resolve())
		.catch((error) => reject({ reason: error.message }));
	});
  };
  
  export const modifyProduct = (requestJson, accessToken) => {
	return new Promise((resolve, reject) => {
	  fetch(`http://localhost:3001/api/v1/products/${requestJson.id}`, {
		method: 'PUT',
		body: JSON.stringify(requestJson),
		headers: {
		  'Content-type': 'application/json; charset=UTF-8',
		  'x-auth-token': accessToken,
		},
	  })
		.then((response) => {
		  if (response.ok) {
			return response.json();
		  } else {
			throw new Error("Server error occurred. Please try again.");
		  }
		})
		.then(() =>
		  resolve({
			message: `Product ${requestJson.name} modified successfully.`,
		  })
		)
		.catch((error) => reject({ reason: error.message }));
	});
  };
  
  export const viewProduct = (id, accessToken) => {
	return new Promise((resolve, reject) => {
	  fetch(`http://localhost:3001/api/v1/product/${id}`, {
		method: 'GET',
		headers: {
		  'x-auth-token': accessToken,
		},
	  })
		.then((response) => {
		  if (response.ok) {
			return response.json();
		  } else {
			throw new Error("Server error occurred.");
		  }
		})
		.then((json) => resolve({ value: json }))
		.catch((error) => reject({ reason: error.message }));
	});
  };
  