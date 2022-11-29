export default class Case {
    #date
    #chemain
    constructor(date, chemain) {
        this.#date = date;
        this.#chemain = chemain;
    }

    get date(){
        return this.#date;
    }

    get chemain(){
        return this.#chemain;
    }
}