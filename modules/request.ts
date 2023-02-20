import axios from "axios";

const port = process.env.PORT || 3002;
const serverSideBaseURL = "http://localhost:" + port + "/api";
const clientSideBaseURL = "http://localhost:" + port + "/api";

const requestInstance = axios.create({
	baseURL: serverSideBaseURL
});

const clientRequestInstance = axios.create({
	baseURL: clientSideBaseURL
});

export const getRequestInstance = (isServerSide: boolean) => {
	if (isServerSide) {
		return requestInstance;
	}
	return clientRequestInstance;
};