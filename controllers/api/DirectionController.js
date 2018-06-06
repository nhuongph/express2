import HTTPStatus from 'http-status';
import Response from '../../helpers/Response';
import { DirectionRepository } from '../../repositories';

let directionRepository = new DirectionRepository();

class DirectionController {

    index = async (req, res) => {
        try {
            let directions = await directionRepository.find();
            return Response.success(res, directions);

        } catch (e) {
            return Response.error(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    }

    uploads = async (req, res) => {
        try {
            let data = await directionRepository.uploads(req);
            return Response.success(res, data, 'Upload success.');
        } catch (e) {
            return Response.error(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    }
}

export default new DirectionController();