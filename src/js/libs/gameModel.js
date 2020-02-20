class GameModel {

    constructor() {
        this.START_CELL = 0;
        this.UNVISITED_CELL = -1;
        this.MAX_MOVES = 10
        this.RANDOM_MOVES = 6
        this.matrix = []

        return this;
    }

    run(start, end, size) {
        
        let matrix = this.generateMatrix(size)

        return this.getWordsPath(matrix, start, end, size)
    }

    getWordsPath(matrix, start, end, size) {

        let path = []
        let words = []

        path = this.findPath(matrix, start, end)
        words = this.getWords(path)  
        
        return words
    }

    findPath(matrix, start, end) {
        let [y,  x] = start;
        let [y1, x1] = end;

        let walks = this.makeWave(matrix, y, x)
        return this.backtrace(walks, y1, x1)
    }

    getRandomPoint(matrixSize) {
        let [y, x] = matrixSize

        return [this.random(1, y), this.random(1, x)]
    }

    random(min, max) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    }

    makeWave(matrix, startY, startX) {

        let walks = matrix.map(row => row.slice().fill(this.UNVISITED_CELL))
        walks[startY][startX] = this.START_CELL

        const wave = (newY, newX, step ) => {
            if (matrix[newY] && !matrix[newY][newX]) {
                if (walks[newY][newX] === this.UNVISITED_CELL) {
                    walks[newY][newX] = step + 1;
                }
            }
        }

        for(let step = 0; step < matrix.length * matrix[0].length; step++) {
            for (let y = 0; y < walks[0].length; y++) {
                for(let x = 0; x < walks[0].length; x++) {
 
                    if (walks[y][x] === step) {
                        wave(y - 1, x, step); // up
                        wave(y, x + 1, step); // right
                        wave(y + 1, x, step); // down
                        wave(y, x - 1, step); // left
                    }
                }
            }
        }

        return walks;
    }

    backtrace(walks, finishY, finishX) {

        let resultPath = []

        let currentY = finishY
        let currentX = finishX

        const addWalk = (y, x) => {
            resultPath.push([y, x])
        }

        addWalk(finishY, finishX);
        
        const wave = (newY, newX, step) => {

            if (walks[newY] != undefined) {
                if (walks[newY][newX] === step - 1) {
                    addWalk(newY, newX);
                    currentX = newX
                    currentY = newY
                    if ( step === 1) return true;
                }
            }
            return false
        }
        for (let step = walks[finishY][finishX]; step >= 0; step--) {
            if (
                wave(currentY + 1, currentX, step) ||
                wave(currentY - 1, currentX, step) ||
                wave(currentY, currentX + 1, step) ||
                wave(currentY, currentX - 1, step)
            ) {
                break;
            }
        }
        return resultPath.reverse();
    }

    generateMatrix(size) {
        let [y, x] = size;
        let sMatrix = []

        for (let i = 0; i < y; i++) {
            sMatrix[i] = []
            for(let j = 0; j < x; j++) {
                sMatrix[i][j] = 0
            }
        }

        return sMatrix.map(row => row.slice());        
    }
    
    getWords(moves) {
        
        let path = []
        let current = moves.shift()

        const translate = (currentPoint, movePos) => {

            let [cY, cX] = currentPoint
            let [mY, mX] = movePos

            if ((cY === mY - 1) && (cX === mX) ) {
                path.push({name:"DOWN", class: "arrow-down"})
                return [mY, mX] 
            }

            if ((cY === mY) && (cX + 1 === mX) ) {
                path.push({name:"RIGHT", class: "arrow-right"})
                return [mY, mX] 
            }

            if ((cY === mY+1) && (cX === mX) ) {
                path.push({name:"UP", class: "arrow-up"})
                return [mY, mX] 
            }

            if ((cY === mY) &&  (cX -1 === mX)) {
                path.push({name:"LEFT", class: "arrow-left"})
                return [mY, mX] 
            }

            return [mY, mX]
        }

        while(moves.length > 0) {

            let movePos = moves.shift()
            current = translate(current, movePos)
        }
        
        return path
    }
}


export default GameModel;