class Formation {
    constructor(formationJson) {
        this.name = formationJson.attributes.name
        this.playbook = formationJson.attributes.playbook
    }
}