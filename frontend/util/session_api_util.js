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

export const fetchAllUsers = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/users',
    success,
    error: () => {
      console.log("all user error");
    }
  });
};

export const goOnline = (username, success) => {
	$.ajax({
		method: 'POST',
		url: '/api/online',
		data: {username},
		success,
		error: () => {
			console.log("go online error");
		}
	});
};

export const goOffline = (username, success) => {
	$.ajax({
		method: 'POST',
		url: '/api/offline',
		data: {username},
		success,
		error: () => {
			console.log("go offline error");
		}
	});
};
