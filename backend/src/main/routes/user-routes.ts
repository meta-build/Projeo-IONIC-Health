import UserController from '../../application/controllers/user/user-controller'
import { authorization } from '../../middlewares'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/user', UserController.create)
  router.put('/user/:id', authorization, UserController.update)
  router.get('/user/:id', authorization, UserController.getUserById)
  router.get('/user', authorization, UserController.getAllUser)
  router.delete('/user/:id', authorization, UserController.deleteUser)
}
