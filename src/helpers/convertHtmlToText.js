import htmlToText from 'html-to-text';

const convertHtmlToText = (html) => {
	const text = htmlToText.fromString(html, {
		wordwrap: false
	});
	return text.substring(0, 150);
};

export default convertHtmlToText;
