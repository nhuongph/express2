import {DirectionController} from '../../controllers/api/';
import { Router } from 'express';

const router = Router();

router.route('/index').get(DirectionController.index);
router.route('/uploads').post(DirectionController.uploads);

export default router;