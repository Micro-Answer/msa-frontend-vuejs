import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8081/api', // 서버의 기본 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
