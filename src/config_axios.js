import axios from "axios";
// cria uma instance Axios com a URL base do Web Service a ser acessado pelo app
export const inAxios = axios.create({ baseURL: "http://172.18.0.2:3001/" });
