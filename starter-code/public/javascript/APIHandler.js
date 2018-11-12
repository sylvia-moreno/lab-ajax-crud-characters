class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {
        return axios.get('http://localhost:8000/characters');
    }

    getOneRegister(id) {
        return axios.get(`http://localhost:8000/characters/${id}`);
    }

    createOneRegister(body) {
        return axios.post('http://localhost:8000/characters', body);
    }

    updateOneRegister(body) {
        return axios.put(`http://localhost:8000/characters/${body.id}`, body);
    }

    deleteOneRegister(id) {
        return axios.delete(`http://localhost:8000/characters/${id}`)
    }
}