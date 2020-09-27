import Swal from 'sweetalert2';

const errorHandler = (errors) => {
	Swal.fire({
		icon: 'warning',
		title: 'ERRORS',
		text: errors,
		footer: '<a href>Why do I have this issue?</a>'
	});
};

export default errorHandler;
