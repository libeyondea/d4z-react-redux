const today = new Date();
export const dateNow =
	today.getFullYear() +
	'-' +
	(today.getMonth() + 1) +
	'-' +
	today.getDate() +
	' ' +
	today.getHours() +
	':' +
	today.getMinutes() +
	':' +
	today.getSeconds();
