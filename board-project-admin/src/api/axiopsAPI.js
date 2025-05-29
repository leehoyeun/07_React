import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "http://localhost",
  // headers : {"Content-Type" : "application/json"}
  // withCreadentials : true // 쿠키 포함 설정   JWP 공부하길!
  // 서버에서도 클라이언트가 보낸 쿠키를 받아줄 준비 해야함!
  // credential 허용 설정 필요함
  // -> JWT 사용 시 중요한 옵션!
});
