class Formations {
    constructor() {
        this.formations = []
        this.adapter = new formationsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadFormations()
    }

    initBindingsAndEventListeners() {
        this.formationsContainer = document.querySelector(".formationsContainer")
        this.formationsList = document.createElement('ul')
        this.formationsContainer.appendChild(this.formationsList)
    }
    
    fetchAndLoadFormations() {
        this.adapter.getFormations()
        .then(formations => {
            formations.data.forEach(formation => this.formations.push(new Formation(formation)))
        })
        .then(() => this.render())
    }
    
    render() {
        for (const formation of this.formations) {
            const formationLi = document.createElement('li')
            formationLi.innerText = formation.name
            this.formationsList.appendChild(formationLi)
        }
    }
}