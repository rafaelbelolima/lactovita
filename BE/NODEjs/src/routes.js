const EstoqueController = require('./Controllers/EstoqueController');
const routes = express.Router();


const cors = require("cors");

//endPoints - Estoque
routes.get('/estoque', EstoqueController.readyEstoque);
routes.post('/estoque', EstoqueController.createEstoque);
routes.put('/estoque', EstoqueController.updateEstoque);
routes.delete('/estoque', EstoqueController.deleteEstoque)
//endPoints - Venda

module.exports = routes;