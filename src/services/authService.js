import axios from "axios";

const API_URL = "http://127.0.0.1:8000/o/token/";

const CLIENT_ID = "Zse27ZtL5JDfj7RykzqtdTLsRcVH5E2QvxQNskbf";
const CLIENT_SECRET = "ahbMH1lyIfHCBItEbY4wm0xIPCzmrmbOHUeWfiVMckbNpR93i3G3GgacBxU1QbnsyWaFOOcAIb2i4gNNzOdcdYdkA6KuEJpTNf3NRsmJiX4TSIFpShvo6ChOIUOFxhC4";

export async function login(username, password) {
    const body =
        `grant_type=password` +
        `&username=${encodeURIComponent(username)}` +
        `&password=${encodeURIComponent(password)}` +
        `&client_id=${encodeURIComponent(CLIENT_ID)}` +
        `&client_secret=${encodeURIComponent(CLIENT_SECRET)}`;

    const response = await axios.post(API_URL, body, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });

    localStorage.setItem("access_token", response.data.access_token);

    return response.data;
}
