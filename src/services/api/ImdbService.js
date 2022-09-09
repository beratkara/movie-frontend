import Query from "../Query";
import axios from "axios";

export default class extends Query {
    constructor() {
        super();
        this.resource = '/api/imdb';
    }

    search() {
        return axios.get(`${this.resource}/movies${this.query()}`);
    }

    show(id) {
        return axios.get(`${this.resource}/movie/${id}${this.query()}`);
    }
}
