class formationsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/"
    }

    getFormations() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}