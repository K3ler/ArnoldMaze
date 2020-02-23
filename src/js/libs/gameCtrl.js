class GameCtrl {

    constructor(model, view) {

        this.view = new view()
        this.model = new model()
        this.isChecked = false

        this.setupStartEvent()
    }

    setupStartEvent() {
        let startGameBtn = this.view.getSelector("startGame")        
        startGameBtn.addEventListener("click", () => this.startGame())
    }

    setupCellEvent() {
        let cells = this.view.getSelector('mapCells')

        cells.forEach((cell, index) => {
            cell.addEventListener("click", (e) => this.checkWinner(e))
        })
    }

    setupNewGameEvent() {
        let btn = this.view.getNewGameBtn()

        btn.addEventListener("click", () => {
            this.restart()
        })
    }

    checkWinner(e) {

        if (this.isChecked) { return }
        let clicked = e.target
        let goalCell = this.view.getEndPoint()

        if( clicked == this.view.getStartPoint() )  {
            return 
        }

        if( clicked === goalCell ) {
            this.view.showPopup("winner", () => {
                this.view.markWinner()
                this.view.show('uiBtn')
            })
        } else {
            this.view.showPopup("fail", () => {
                this.view.markLooser(clicked)
                this.view.show('uiBtn')
            })
        }
        
        this.setupNewGameEvent()

        this.isChecked = true
    }

    startGame() {

        this.view.hide('welcomeBlock')
        this.view.show("uiBlock")

        let nSize = this.model.range(3, 6)
        let startPoint = [this.model.range(0, nSize-1), this.model.range(0, nSize-1) ]
        let size = [nSize, nSize]

        let path = this.model.run(startPoint, size).getArrows()
        let endPos = path[path.length-1].cors

        this.view.init(startPoint, size)
        this.view.setEnd(endPos)
        this.setupCellEvent()
        this.view.startArrows(path)
    }

    restart() {
        location.reload()
    }
}


export default GameCtrl