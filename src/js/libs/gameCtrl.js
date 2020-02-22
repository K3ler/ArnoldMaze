class GameCtrl {

    constructor(model, view) {

        this.isGameRunning = true

        let [startPoint, size] = [[0, 0], [4, 4]]
        let words = []

        this.model = new model()
        words = this.model.run(size).getArrows()
        
        this.view = new view('.map', '.controls', size, 10)
        this.view.generateMap()
        this.view.generateControlsField()
        this.view.setStartPoint(startPoint)
        
        let i = words.length
        this.view.addArrows(words)
        this.view.setEndPoint(words[i-1].cors)
        
        this.setEvents()
    }

    setEvents() {
        
        let cells = this.view.getMapCells()
        cells.forEach((cell, index) => {
            cell.addEventListener('click', this.checkWinner.bind(this))
        })
    }

    checkWinner(e) {

        if(!this.isGameRunning) return 

        if (e.target === this.view.point.startCell) {
            return 
        }
        else if(e.target === this.view.point.endCell ) {
            
            this.view.showWinPopup(() => this.view.markWinner(e))
            this.isGameRunning = false
        } else {
            this.isGameRunning = false
            this.view.showFailPopUp(() => this.view.markFail(e))
        }
    }

    run() {
        return this;
    }
}


export default GameCtrl