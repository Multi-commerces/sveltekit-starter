// Importing required modules and dependencies https://randomkeygen.com/
// https://docs.chainstack.com/docs/tutorial-mastering-jwt-how-to-implement-secure-user-authentication
import { SignJWT } from 'jose';
import dotenv from 'dotenv';

const encoder = new TextEncoder();
dotenv.config();

// Extracting and encoding the secret key from the environment variables
const secretKey = process.env.SECRET_KEY;

// Defining the algorithm used for signing the token
const algorithm = 'HS256';

// Defining the custom claims to be used in the JWT
const customIssuer = process.env.JWT_ISSUER ?? 'JWT_ISSUER_DEFAULT';
const customAudience = process.env.JWT_AUDIANCE ?? 'JWT_AUDIANCE_DEFAULT';

/**
 * Defining a function which generates tokens with options specified
 * @param {*} user
 * @returns
 */
// @ts-ignore
const generateAccessToken = async (user) => {
	console.log('generateAccessToken ' + JSON.stringify(user));
	try {
		// Setting the token's "not before" value to 60 seconds before the current time
		const nowInSeconds = Math.floor(Date.now() / 1000);
		const nbf = nowInSeconds - 60; // Valide durant 1 heure
		const secret = encoder.encode(secretKey);

		// Creating a new JWT token and setting its values
		const signedJWT = await new SignJWT({ id: user.id, email: user.email })
			.setProtectedHeader({ alg: algorithm })
			// Délivré
			.setIssuedAt(nowInSeconds)
			// Émetteur
			.setIssuer(customIssuer)
			.setAudience(customAudience)
			.setExpirationTime('1h')
			.setNotBefore(nbf)
			.sign(secret);

		return signedJWT;
	} catch (error) {
		console.error(`Error generating token: ${error}`);
	}
};

export default generateAccessToken;
