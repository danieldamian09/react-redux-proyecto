import axios from "axios";

// seria igual que extender los servicios
const apiCall = axios.create({
	baseURL: "https://superheroapi.com/api.php/10223232565340348",
});

export default apiCall;
