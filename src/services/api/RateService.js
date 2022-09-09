import Query from "../Query";
import axios from "axios";

export default class extends Query {
    constructor() {
        super();
        this.resource = '/api/movie-rates';
    }

    show(id) {
        return axios.get(`${this.resource}${id}${this.query()}`);
    }
}
