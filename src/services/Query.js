import axios from "axios";

export default class {
    constructor() {
        this.queries = [];
    }

    query() {
        let query = '?' + this.queries.join('&');
        this.queries = [];
        return query;
    }

    parameter(key, value) {
        this.queries.push(`${key}${value ? '='+ value : ''}`);
        return this;
    }

    store(params) {
        return axios.post(`${this.resource}${this.query()}`, params);
    }
}
