require('./ContactFormStyles.css')

function ContactForm() {
	return (
		<div className="form-container">
			<h1>Send a message to Us</h1>
			<form>
				<input type="text" placeholder='Name' />
				<input type="text" placeholder='Email' />
				<input type="text" placeholder='Subject'  />
				<textarea  cols="5" rows="5" placeholder='Message'></textarea>
				<button>Send Message</button>
			</form>
		</div>
	)
}
export default ContactForm;