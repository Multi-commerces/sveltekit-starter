import * as SibApiV3Sdk from '@sendinblue/client';

// exemple https://github.com/sveltejs/kit/blob/master/documentation/docs/20-core-concepts/30-form-actions.md
/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	let message = cookies.get('lastMessage');

	return { email: 'julien.ilari@gmail.com', message: `dernier message ${message}` };
}

/** @type {import('./$types').Actions} */
export const actions = {
	send: async ({ cookies, request }) => {
		try {
			const data = await request.formData();
			const email = data.get('email');
			const message = data?.get('message');
			const subject = data?.get('subject');

			let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
			apiInstance.setApiKey(
				SibApiV3Sdk.ContactsApiApiKeys.apiKey,
				'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'
			);

			let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
			sendSmtpEmail.subject = subject;
			sendSmtpEmail.sender = {
				email: email,
				name: 'Julien ILARI'
			};
			sendSmtpEmail.to = [
				{
					email: 'julien.ilari@gmail.com',
					name: 'Julien ILARI'
				}
			];
			sendSmtpEmail.message = message;
			sendSmtpEmail.htmlContent = `<html><head></head><body><p>${message}</p></body></html>`;

			let success = false;
			apiInstance.sendTransacEmail(sendSmtpEmail).then(
				function (data) {
					// console.log('API called successfully. Returned data: ' + JSON.stringify(data));
					success = true;
				},
				function (error) {
					console.error('########################' + JSON.stringify(error));
				}
			);

			return {
				success,
				message: 'API called successfully ',
				email
			};
		} catch (err) {
			const message = `###################### Error in /login form: ${err}`;
			console.error(message);
			// return error(500, message);
			return { success: true, message, email };
		}
	}
};
