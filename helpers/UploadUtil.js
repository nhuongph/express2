import FS from "fs";
import Uuidv4 from "uuid/v4";

const PATH = "public/uploads/";

export default class UploadUtil {

    static uploads(file) {
        if (file) {
            let path = file.files.path;
            let newFileName = Uuidv4 + "." + file.files.ext;
            let newPath = PATH + newFileName;
            FS.copyFile(path, newPath, (error) => {
                if (error) throw error;

                return newPath;
            });
        }
        throw "File not found.";
    }
};