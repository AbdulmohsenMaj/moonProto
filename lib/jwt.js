import { SignJWT, jwtVerify } from "jose";

function getSecretKey() {
	const secret = process.env.JWT_SECRET;
	if (!secret) throw new Error("JWT_SECRET is not set");
	return new TextEncoder().encode(secret);
}

export async function signJwt(payload, options = {}) {
	const secret = getSecretKey();
	const exp = options.expiresIn || "7d";
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime(exp)
		.sign(secret);
}

export async function verifyJwt(token) {
	const secret = getSecretKey();
	const { payload } = await jwtVerify(token, secret, {
		algorithms: ["HS256"],
	});
	return payload;
}
