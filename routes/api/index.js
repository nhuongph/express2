import { Router } from 'express';
import DirectionRoute from './DirectionRoute';

const router = Router();
router.use('/directions', DirectionRoute);

export default router;