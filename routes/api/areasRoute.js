var router = require('express').Router();
var areasCtrl = require('../../controllers/api/areasController');

router.route('/')
    .get(areasCtrl.listarArea)
    .post(areasCtrl.novaArea);
//teste
router.param('idArea', areasCtrl.obterAreaMiddleware);

router.route('/:idArea')
    .get(areasCtrl.exibirArea)
    .put(areasCtrl.editarArea)
    .delete(areasCtrl.excluirArea);

module.exports = router;