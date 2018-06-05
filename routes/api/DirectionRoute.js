import {DirectionController} from '../../controllers/api';
import { Router } from 'express';

const router = Router(); // eslint-disable-line new-cap

router.route('/directions/index').get(DirectionController.index);
router.route('/directions/upload').post(PostController.uploads);

export default router;