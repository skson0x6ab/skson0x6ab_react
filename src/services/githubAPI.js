import axios from "axios";

const token = process.env.REACT_APP_GITHUB_TOKEN; // 환경 변수에서 GitHub 토큰 가져오기

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${token}`,
    Accept: "application/vnd.github.v3+json",
  },
});

export default githubAPI;