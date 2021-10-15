var express = require('express');
var router = express.Router();
var Product = require('./product');

router.post('/', (req, res) => {
    let dep = new Product({
        name: req.body.name
    });

    dep.save((err, d) => {
        //dep é o que vai salvar e o d é o department
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(d);
    })
})

router.get('/', (req, res) => {
    Product.find().exec((err, deps) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(deps);
    })
})

router.delete('/:id', async (req, res)=>{
    try {
        let id = req.params.id;

        await Product.deleteOne({_id:id})
        res.status(200).send({});
        
    } catch (err) {
        res.status(500).send({msg:'Internal Error', error: err});
    }
})
//quando der certo entra no try, quando da erro entra no catch
//({msg: 'Internal error', error: err}) manda uma mensagem com o erro
router.patch('/:id', async (req, res)=>{
    Product.findById(req.params.id, (err, dep)=>{
        if (err) {
            res.status(500).send(err);
        }
        else{
            if (!dep) {
                res.status(404).send({dep});
            }
            else{
                dep.name = req.body.name;
                dep.save()
                .then((d)=> res.status(200).send(d)) //o then funciona como try
                .catch((d)=> res.status(500).send(e))

                
            }
        }

    })
})

module.exports = router;