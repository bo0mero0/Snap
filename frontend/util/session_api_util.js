export const login = (user, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: user,
		success,
		error
	});
};

export const signup = (user, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/user',
		data: user,
		success,
		error
	});
};

export const logout = success => {
	$.ajax({
		method: 'DELETE',
		url: '/api/session',
		success,
		error: () => {
		  console.log("Logout error");
		}
	});
};
