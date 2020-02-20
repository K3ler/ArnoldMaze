class GameView {
    
    constructor(idMap, idControls, sizeMap, sizeControls) {

        this.size = {}
        this.point = {}
        this.id = {}
        this.id.mapCells = []

        let mapElement = document.querySelector(idMap)
        let controlsElement = document.querySelector(idControls)

        this.id.mapElement = mapElement
        this.id.controlsElement = controlsElement
        this.size.map = [...sizeMap]
        this.size.controls = sizeControls
        this.size.moves = 10
    }

    showFailPopUp(cb) {

        let popup = document.querySelector('.popup-fail')
        let video = document.querySelector('.video-fail')
        
        popup.classList.add('popup__show')
        video.onended = () => cb()
        video.play()
    }

    showWinPopup(cb) {
        let popup = document.querySelector('.popup-win')
        let video = document.querySelector('.video-win')
        
        popup.classList.add('popup__show')
        video.onended = () => cb()
        video.play()
    }

    hideFailPopUp() {
        let popup = document.querySelector('.popup-fail')
        popup.classList.remove('popup__show')
    }

    hideWinPopUp() {
        let popup = document.querySelector('.popup-win')
        popup.classList.remove('popup__show')
    }

    getMapCells() {
        return this.id.mapElement.querySelectorAll('.map-cell');
    }
    
    getArrowCells() {
        return this.id.controlsElement.querySelectorAll(".controls-cell")
    }

    addArrows(words) {

        let cells = this.getArrowCells()

        cells.forEach((elemt, index) => {
            if(words[index] != undefined) {
                console.log(index)
                setTimeout(() => elemt.classList.add(words[index].class), index*500)
            }
        })
    }

    generateMap() {

        let [sizeY, sizeX] = this.size.map;
        let table = document.createElement('table')
        table.classList.add('map-table')

        for( let i = 0; i < sizeY; i++) {
            let row = document.createElement('tr')
            row.classList.add('map-row')

            for(let j = 0; j < sizeX; j++) {
                let cell = document.createElement('td')
                cell.classList.add('map-cell')
                cell.style.width = (100 / sizeX) + "%"
                cell.style.height = (100 / sizeX) + "%"
                this.id.mapCells.push(cell)
                row.append(cell)
            }
            table.append(row)
        }
        this.id.mapElement.append(table)
    }

    generateControlsField() {

        let table = document.createElement("table")
        table.classList.add("controls-table")
        for(let i = 0; i < this.size.moves / 5; i++ ) {

            let row = document.createElement("tr")
            row.classList.add("controls-row")
            for (let j = 0; j < this.size.moves / 2; j++) {
                
                let cell = document.createElement("td")
                cell.classList.add("controls-cell")
                row.append(cell)               
            }
            table.append(row)
        }

        this.id.controlsElement.append(table)
    }

    setStartPoint(point) {
        let [y, x] = point
        let cell = this.id.mapElement
                        .querySelectorAll('.map-row')[y]
                        .querySelectorAll('.map-cell')[x]
        
        cell.classList.add('start-point')
        
        this.point.startPoint = point
        this.point.startCell = cell
    }

    setEndPoint(point) {
        let [y, x] = point
        let cell = this.id.mapElement
                            .querySelectorAll('.map-row')[y]
                            .querySelectorAll('.map-cell')[x]
        
        this.point.endPoint = point
        this.point.endCell = cell
    }

    markWinner() {
        this.point.endCell.classList.add('win-point')
    }

    markFail(e) {
        e.target.classList.add('fail-point')
    }

    getStartPoint() {
        return this.point.startPoint
    }
    
    getStartCell() {
        return this.point.startCell
    }

    getEndCell() {
        return this.point.endCell;
    }

    getEndPoint() {
        return this.point.endPoint
    }

    deleteStartPoint() {

        this.id.mapElement
                .querySelector('.start-point')
                .classList.remove('start-point')
    }
    
}

export default GameView;