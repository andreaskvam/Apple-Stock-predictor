import http from "../http-common";

class DataService {
  getPred(data) {
    return http.get("/py", data)
  }

  sendData(data) {
    return http.post("/data", data)
  }

  getSvr() {
    return http.get("/svr");
  }

  getCloseData() {
    return http.get('/aaplClose');
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/majsmajs", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new DataService();