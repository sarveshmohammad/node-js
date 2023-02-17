const express = require('express')
const router = express.Router();
const { getUsers , setUsers , updateUsers , deleteUsers,loginserver} = require('../controllers/usercontrolles')

router.get('/',getUsers);

router.post('/',setUsers);

router.post('/login',loginserver)

router.put('/:id',updateUsers);

router.delete('/:id',deleteUsers);


// Router.route('/').get(getuser).post(setUsers)
// Router.route('/:id').delete(deleteuser).put(updateuser)

module.exports = router;