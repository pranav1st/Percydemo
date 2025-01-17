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
exports.DtoHelper = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
require("reflect-metadata");
var utility_1 = require("../utility");
var DtoHelper;
(function (DtoHelper) {
    // ? Function implementation (not visible from the outside)
    function apply(className, target) {
        return (0, class_transformer_1.plainToClass)(className, target !== null && target !== void 0 ? target : {}, {
            excludeExtraneousValues: true,
        });
    }
    DtoHelper.apply = apply;
    /* -------------------------------------------------------------------------- */
    /*                  CHECK PROPERTIES BEFORE HANDLING REQUEST                  */
    /* -------------------------------------------------------------------------- */
    function validationFactory(metadataKey, model, source) {
        return function (target, propertyName, descriptor) {
            Reflect.defineMetadata(metadataKey, model, target, propertyName);
            var method = descriptor.value;
            descriptor.value = function () {
                return __awaiter(this, arguments, void 0, function () {
                    var model, request, response, plain, instance, errors, keys, body, _i, keys_1, key;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                model = Reflect.getOwnMetadata(metadataKey, target, propertyName);
                                request = arguments[0], response = arguments[1];
                                plain = request[source];
                                instance = (0, class_transformer_1.plainToInstance)(model, plain);
                                return [4 /*yield*/, (0, class_validator_1.validate)(instance)];
                            case 1:
                                errors = _a.sent();
                                if (errors.length > 0) {
                                    response.status(400).json(transformValidationErrorsToJSON(errors));
                                    return [2 /*return*/];
                                }
                                keys = Object.getOwnPropertyNames(new model());
                                body = {};
                                for (_i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                    key = keys_1[_i];
                                    if (utility_1.Utility.isDefined(plain[key])) {
                                        body[key] = plain[key];
                                    }
                                }
                                request.body = body;
                                return [2 /*return*/, method.apply(this, arguments)];
                        }
                    });
                });
            };
        };
    }
    DtoHelper.validationFactory = validationFactory;
    function transformValidationErrorsToJSON(errors) {
        return errors.reduce(function (p, c) {
            if (!c.children || !c.children.length) {
                p[c.property] = Object.keys(c.constraints).map(function (key) { return c.constraints[key]; });
            }
            else {
                p[c.property] = transformValidationErrorsToJSON(c.children);
            }
            return p;
        }, {});
    }
})(DtoHelper || (exports.DtoHelper = DtoHelper = {}));
