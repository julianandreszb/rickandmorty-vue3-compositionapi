class Client {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    return fetch(`${this.baseUrl}${endpoint}`).then((response) =>
      response.json()
    );
  }
}

export { Client };
