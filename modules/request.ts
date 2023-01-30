import axios from "axios";
const serverSideBaseURL = "http://localhost:3002/api";
const clientSideBaseURL = "http://localhost:3002/api";
 
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