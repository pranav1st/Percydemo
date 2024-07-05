"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHelper = void 0;
var bodyParser = require("body-parser");
var RequestHelper;
(function (RequestHelper) {
    function getPath(request) {
        return request === null || request === void 0 ? void 0 : request.path;
    }
    RequestHelper.getPath = getPath;
    function getMethod(request) {
        return request === null || request === void 0 ? void 0 : request.method;
    }
    RequestHelper.getMethod = getMethod;
    function getBody(request) {
        return request === null || request === void 0 ? void 0 : request.body;
    }
    RequestHelper.getBody = getBody;
    function getQueryOptions(request) {
        var queryOptions = request.query.queryOptions;
        if (queryOptions) {
            try {
                return JSON.parse(queryOptions);
            }
            catch (error) {
                throw new Error(error);
            }
        }
        return {};
    }
    RequestHelper.getQueryOptions = getQueryOptions;
    function getAuthorization(request) {
        var _a, _b;
        var token = (_a = request === null || request === void 0 ? void 0 : request.headers) === null || _a === void 0 ? void 0 : _a['authorization'];
        return (_b = token === null || token === void 0 ? void 0 : token.replace('Bearer ', '')) === null || _b === void 0 ? void 0 : _b.trim();
    }
    RequestHelper.getAuthorization = getAuthorization;
    function getRawBody(request) {
        return request === null || request === void 0 ? void 0 : request['rawBodyBuffer'];
    }
    RequestHelper.getRawBody = getRawBody;
    function handleRawBody(request, response, next) {
        var _a;
        if (!((_a = request === null || request === void 0 ? void 0 : request.path) === null || _a === void 0 ? void 0 : _a.endsWith('/raw'))) {
            next();
            return;
        }
        var captureRawBodyMiddleware = bodyParser.raw({ type: function () { return true; } });
        captureRawBodyMiddleware(request, response, function (error) {
            if (error) {
                next();
                return;
            }
            request['rawBodyBuffer'] = request.body;
            next();
        });
    }
    RequestHelper.handleRawBody = handleRawBody;
})(RequestHelper || (exports.RequestHelper = RequestHelper = {}));
