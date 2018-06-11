import BaseRepository from './BaseRepository';
import Uuidv4 from "uuid/v4";
import XLSX from 'xlsx';

const PATH = "public/uploads/";

export default class DirectionRepository extends BaseRepository {
    constructor() {
        super('Directions');
    }

    uploads = (req) => {
        if (!req.files || !req.files.direction_file)
            throw Error('No files were uploaded.');

        let directionFile = req.files.direction_file;
        let filePath = this.moveFile(directionFile);

        let data = this.getFileData(filePath);

        this.create(this.updateInsertData(data));
    };

    moveFile = (directionFile) => {
        let newFileName = Uuidv4 + "." + directionFile.ext;
        let newPath = PATH + newFileName;

        directionFile.mv(newPath, function(err) {
            if (err) throw err;
        });

        return newPath;
    };

    getFileData = (filePath) => {
        let workbook = XLSX.readFile(filePath);
        let sheetNameList = workbook.SheetNames;
        let sheet3 = workbook.Sheets[sheetNameList[2]];
        let data = XLSX.utils.sheet_to_json(sheet3, {header: 1, range: 1});

        return data;
    };

    updateInsertData = (data) => {
        data.forEach((val) => {
            val.createdAt = new Date();
            val.updatedAt = new Date();
        });

        return data;
    };
}
