import '../sass/main.sass';
import MatrixModel from './libs/gameModel'
import MapView from './libs/gameView'
import GameCtrl from './libs/gameCtrl'


let controller = new GameCtrl(MatrixModel, MapView)
controller.run()



/*
let matrixSize = [3, 3]
let startPoint = [0, 0]
let endPoint = [2, 2]

let matrix = new MatrixModel(matrixSize)
let path = matrix.run(startPoint, endPoint).resultPath;

let map = new MapView("#map")
 */