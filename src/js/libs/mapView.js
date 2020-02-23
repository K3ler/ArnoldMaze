class MapView {

    constructor() {

        // shortcut
        let el = selector => document.querySelector(selector)

        this.el = {
            header :        el('.hero-heading'),
            mapRoot :       el("#map"),
            mapWrapper :    el('#map-wrapper'),
            uiBlock :       el(".ui-block"),
            arrowsBlock:    el("#arrows-block"),
            arrows:         el("#arrows"),
            popup:          el("#popup"),
            uiBtn:          el("#ui-btn"),
            startGame:      el("#start-game"),
            welcomeBlock:   el(".welcome"),
            mapCells:       [],
            arrowsCells:    [],
            startPoint: 0,
            endPos: 0,
            newGame : 0
        }

        this.ARROWS_SIZE = 10
    }

    init(start, size) {
        this.renderMap(size)
        this.setStart(start)
        this.renderArrowMap()
    }

    getNewGameBtn() {
        return document.querySelector('#new-game')
    }

    getVideoTag(file, cl) {
        
        let video = document.createElement("video")
        let source = document.createElement("source")

        video.setAttribute('preload', 'auto')
        video.classList.add(cl)
        source.src = file
        video.append(source)

        return video
    }

    showPopup(mode, cb) {

        let video = ""

        if( mode == 'winner') {
            video = this.getVideoTag("video/win.mp4", 'video-win')
        }

        if( mode == 'fail') {
            video = this.getVideoTag("video/fail.mp4", 'video-fail')
        }

        this.hide('arrows')
        this.show('popup')
        this.el.popup.append(video)
        video.onended = () => cb()
        video.play()         
    }

    markWinner() {
        this.el.endPos.classList.add('win-pos')
    }

    markLooser(e) {
        e.classList.add('fail-pos')
    }

    getSelector(selector) {
        return this.el[selector]
    }

    hide(selector) {
        this.el[selector].classList.remove('show')
        this.el[selector].classList.toggle('hide')
    }

    show(selector) {
        this.el[selector].classList.remove('hide')
        this.el[selector].classList.toggle('show')
    }

    renderMap(size) {

        this.el.mapTable = document.createElement("table")
        this.el.mapTable.classList.add("map-table")
        let [cols, rows] = size

    
        for( let i = 0; i < cols; i++) {
            let tr = document.createElement("tr")
            tr.classList.add("map-row")

            for ( let j = 0; j < rows; j++) {
                let td = document.createElement("td")
                td.classList.add("map-cell")
                td.style.width = 100 / rows + "%"
                td.style.height = 100 / cols + "%"
                this.el.mapCells.push(td)
                tr.append(td)
            }
            this.el.mapTable.append(tr)
        }

        this.el.mapWrapper.append(this.el.mapTable)

        return this
    }

    reset() {
        this.el.mapWrapper.innerHTML = ''
        this.el.arrows.innerHTML = ''

        return this
    }

    startArrows(path) {

        this.el.arrowsCells.forEach((el, i) => {

            setTimeout(() => {
                el.classList.add(path[i].class)
            }, i * 800)
        })

        return this
    }

    renderArrowMap() {

        let table   = document.createElement("table")
        table.classList.add("arrow-table")
        let cols    = this.ARROWS_SIZE / 5
        let rows    = this.ARROWS_SIZE / 2
        
        for(let i = 0; i < cols; i++) {
            let tr = document.createElement("tr")
            tr.classList.add("arrow-row")

            for(let j = 0; j < rows; j++) {
                
                let td = document.createElement('td')
                td.classList.add("arrow-cell")
                this.el.arrowsCells.push(td)
                tr.append(td)
            }
            table.append(tr)
        }

        this.el.arrows.append(table)
        return this
    }

    setStart(point) {

        let [y, x] = point
        let startPoint = this.el.mapWrapper.querySelectorAll(".start-point")
        
        if ( startPoint.length != 0) {
            this.el.mapWrapper
                   .querySelector(".start-point")
                   .classList.remove("start-point")
        }
        
        this.el.startPoint = this.el
                                  .mapWrapper
                                  .querySelectorAll('.map-row')[y]
                                  .querySelectorAll('.map-cell')[x]
        
        this.el.startPoint.classList.add('start-point')

        return this
    }

    setEnd(endPos) {

        let [y, x] = endPos
      
        this.el.endPos = this.el.mapWrapper
                                .querySelectorAll('.map-row')[y]
                                .querySelectorAll('.map-cell')[x]
        
        this.el.endPos.classList.add('end-point')
    }

    getStartPoint() {
        return this.el.startPoint
    }

    getEndPoint() {
        return this.el.endPos
    }
}

export default MapView;