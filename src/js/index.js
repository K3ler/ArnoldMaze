import '../sass/main.sass';
import MatrixModel from './libs/matrixModel'
import MapView from './libs/mapView'
import GameCtrl from './libs/gameCtrl'


let controller = new GameCtrl(MatrixModel, MapView)