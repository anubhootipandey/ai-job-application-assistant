import axios from "axios";

export const endpoints={
    "UPLOAD_RESUME": "/upload-resume",
    "GENERATE_EMAIL": "/generate-email",
}

export const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL
})
console.log(import.meta.env.VITE_APP_BASE_URL)