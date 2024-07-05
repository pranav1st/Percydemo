"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHelper = void 0;
var fs = require("fs");
var os = require("os");
var Path = require("path");
var path_1 = require("path");
var PlatformTools_1 = require("typeorm/platform/PlatformTools");
var FileHelper;
(function (FileHelper) {
    function getRoot() {
        return Path.join(__dirname, '../../..');
    }
    FileHelper.getRoot = getRoot;
    function findFileContent(path) {
        return fs.readFileSync(path, 'utf-8');
    }
    FileHelper.findFileContent = findFileContent;
    function writeFolder(path) {
        fs.mkdirSync(path, { recursive: true });
    }
    FileHelper.writeFolder = writeFolder;
    function writeFile(path, content) {
        var pathFolder = path.split('/').slice(0, -1).join('/');
        writeFolder(pathFolder);
        return fs.writeFileSync(path, content);
    }
    FileHelper.writeFile = writeFile;
    function joinPaths() {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        return path_1.join.apply(void 0, paths);
    }
    FileHelper.joinPaths = joinPaths;
    function createReadStream(path) {
        return fs.createReadStream(path);
    }
    FileHelper.createReadStream = createReadStream;
    function buildTemporaryPath(path) {
        var pathTemporary = Path.join(os.tmpdir(), 'marblism-tmp', path);
        return pathTemporary;
    }
    FileHelper.buildTemporaryPath = buildTemporaryPath;
    function fromArrayBufferToReadable(arrayBuffer) {
        var buffer = Buffer.from(arrayBuffer);
        var readableStream = new PlatformTools_1.Readable({
            read: function () {
                this.push(buffer); // Push the buffer to the stream
                this.push(null); // Indicate the end of the stream
            },
        });
        return readableStream;
    }
    FileHelper.fromArrayBufferToReadable = fromArrayBufferToReadable;
    function createReadStreamFromArrayBuffer(arrayBuffer, filename) {
        return __awaiter(this, void 0, void 0, function () {
            var path, pathFolder;
            return __generator(this, function (_a) {
                path = buildTemporaryPath(filename);
                pathFolder = path.split('/').slice(0, -1).join('/');
                deleteFolder(pathFolder);
                writeFolder(pathFolder);
                fs.writeFileSync(path, Buffer.from(arrayBuffer));
                return [2 /*return*/, fs.createReadStream(path)];
            });
        });
    }
    FileHelper.createReadStreamFromArrayBuffer = createReadStreamFromArrayBuffer;
    function deleteFile(path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                fs.unlinkSync(path);
                return [2 /*return*/];
            });
        });
    }
    FileHelper.deleteFile = deleteFile;
    function deleteFolder(path) {
        try {
            fs.rmdirSync(path, { recursive: true });
        }
        catch (error) {
            // ignore
        }
    }
    FileHelper.deleteFolder = deleteFolder;
})(FileHelper || (exports.FileHelper = FileHelper = {}));
