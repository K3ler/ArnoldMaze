import '../sass/main.sass';
import MatrixModel from './libs/gameModel'
import MapView from './libs/gameView'
import GameCtrl from './libs/gameCtrl'


let controller = new GameCtrl(MatrixModel, MapView)
controller.run()