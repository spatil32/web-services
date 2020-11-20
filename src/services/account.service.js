import http from "../http-common";

class AccountDataService {
  getAll() {
    return http.get("/accounts");
  }

  get(id) {
    return http.get(`/accounts/${id}`);
  }

  create(data) {
    console.log(data)
    return http.post("/accounts", data);
  }

  update(id, data) {
    return http.put(`/accounts/${id}`, data);
  }

  delete(id) {
    return http.delete(`/accounts/${id}`);
  }

  deleteAll() {
    return http.delete(`/accounts`);
  }

  findByAccountName(name) {
    return http.get(`/accounts?accountName=${name}`);
  }
}

export default new AccountDataService();