class MatrixModel {

    constructor() {

        this.matrix = []
        this.steps = []
        this.matrixSize = 0
        this.MAX_STEPS = 10
        return this
    }

    run(size) {

        this.matrixSize = size
        this.matrix = this.generateMatrix(size)
        let currPos = [0,0]

        for(let i = 0; i < this.MAX_STEPS; i++) {

            currPos = this.makeSteps(currPos)
            this.steps.push(currPos)
        }

        console.log(this.steps.slice())

        return this
    }

    makeSteps(currentPos) {

        const isSafe = (y, x) => {

            if ( this.matrix[y] && this.matrix[y][x] !== undefined ) {   
                return [y, x]
            }

            return false
        }

        const check = (y, x) => {
            let cors = false
            switch(this.range(1, 4)) {
                case 1:
                    // left
                    cors = isSafe(y, x-1)
                break;

                case 2:
                    // right
                    cors = isSafe(y, x+1)
                break;

                case 3:
                    // top
                    cors = isSafe(y-1, x)
                break;

                case 4:
                    // bottom
                    cors = isSafe(y+1, x)
                break;
            }
            return cors
        }

        const randomStep = (currPos) => {

            let [y, x] = currPos
            let cors = check(y, x)

            while(!Array.isArray(cors)) {
                cors = check(y, x)
            }

            return cors;
        }
        return randomStep(currentPos)
    }

    getArrows() {

        return this.getWords()
    }

    getRandomPoint(matrixSize) {

        let [y, x] = matrixSize
        return [this.range(1, y), this.range(1, x)]
    }

    range(min, max) {
        
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    }

    generateMatrix(size) {

        let [y, x] = size;
        let sMatrix = []

        for (let i = 0; i < y; i++) {
            sMatrix[i] = []
            for(let j = 0; j < x; j++) {
                sMatrix[i][j] = -1
            }
        }

        return sMatrix.map(row => row.slice());        
    }
    
    getWords() {
        
        let path = []
        let current = [0,0] //this.steps.shift()
        
        const translate = (currentPoint, movePos) => {

            let [cY, cX] = currentPoint
            let [mY, mX] = movePos

            if ((cY === mY - 1) && (cX === mX) ) {
                path.push({name:"DOWN", class: "arrow-down", cors: [mY, mX]})
                return [mY, mX] 
            }

            if ((cY === mY) && (cX + 1 === mX) ) {
                path.push({name:"RIGHT", class: "arrow-right", cors: [mY, mX]})
                return [mY, mX] 
            }

            if ((cY === mY+1) && (cX === mX) ) {
                path.push({name:"UP", class: "arrow-up", cors: [mY, mX]})
                return [mY, mX] 
            }

            if ((cY === mY) &&  (cX -1 === mX)) {
                path.push({name:"LEFT", class: "arrow-left", cors: [mY, mX]})
                return [mY, mX] 
            }

            return [mY, mX]
        }

        while(this.steps.length > 0) {

            let movePos = this.steps.shift()
            current = translate(current, movePos)
        }

        return path
    }
}


export default MatrixModel;