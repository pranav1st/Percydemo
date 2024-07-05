"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketServer = void 0;
var websockets_1 = require("@nestjs/websockets");
var utility_1 = require("@server/helpers/utility");
var SocketServer = function () {
    var _classDecorators = [(0, websockets_1.WebSocketGateway)({ cors: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _server_decorators;
    var _server_initializers = [];
    var SocketServer = _classThis = /** @class */ (function () {
        function SocketServer_1() {
            this.server = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _server_initializers, void 0));
            this.clients = {};
        }
        SocketServer_1.prototype.handleConnection = function (client) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var token = this.getClientToken(client);
            try {
                var userId = this.verifyTokenOrFail(token).userId;
                this.registerClient(userId, client);
            }
            catch (_) {
                // ignore
            }
        };
        SocketServer_1.prototype.handleDisconnect = function (client) {
            for (var _i = 0, _a = Object.entries(this.clients); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (value.id === client.id) {
                    delete this.clients[key];
                    break;
                }
            }
        };
        SocketServer_1.prototype.sendToUser = function (userId, key, payload) {
            var client = this.getClient(userId);
            if (client) {
                client.emit(key, payload);
            }
        };
        SocketServer_1.prototype.getClientToken = function (client) {
            return client.handshake.query.token;
        };
        SocketServer_1.prototype.verifyTokenOrFail = function (token) {
            var isUndefined = token === 'undefined' || !utility_1.Utility.isDefined(token);
            if (isUndefined) {
                throw new Error("Token is undefined");
            }
            return { userId: token };
        };
        SocketServer_1.prototype.registerClient = function (userId, client) {
            if (!this.clients[userId]) {
                this.clients[userId] = client;
            }
        };
        SocketServer_1.prototype.getClient = function (userId) {
            return this.clients[userId];
        };
        return SocketServer_1;
    }());
    __setFunctionName(_classThis, "SocketServer");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _server_decorators = [(0, websockets_1.WebSocketServer)()];
        __esDecorate(null, null, _server_decorators, { kind: "field", name: "server", static: false, private: false, access: { has: function (obj) { return "server" in obj; }, get: function (obj) { return obj.server; }, set: function (obj, value) { obj.server = value; } }, metadata: _metadata }, _server_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SocketServer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SocketServer = _classThis;
}();
exports.SocketServer = SocketServer;
