class GameCtrl {

    constructor(model, view) {

        this.isGameRunning = true

        let [startPoint, endPoint, size] = [[0, 0], [3, 3], [4, 4]]
        let words = []

        this.model = new model()
        words = this.model.run(startPoint, endPoint, size)
        
        
        this.view = new view('.map', '.controls', size, 10)
        this.view.generateMap()
        this.view.generateControlsField()
        this.view.setStartPoint(startPoint)
        this.view.setEndPoint(endPoint)
        this.view.addArrows(words)
        
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