"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UsersController = void 0;
var common_1 = require("@nestjs/common");
var UsersController = /** @class */ (function () {
    function UsersController(service) {
        this.service = service;
    }
    UsersController.prototype.store = function (request) {
        return this.service.store(request);
    };
    UsersController.prototype.get = function (request) {
        return this.service.getPlaceVisited(request);
    };
    UsersController.prototype.update = function (params) {
        return this.service.increment(params);
    };
    __decorate([
        common_1.Post('store'),
        __param(0, common_1.Request())
    ], UsersController.prototype, "store");
    __decorate([
        common_1.Get(''),
        __param(0, common_1.Request())
    ], UsersController.prototype, "get");
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Param())
    ], UsersController.prototype, "update");
    UsersController = __decorate([
        common_1.Controller('users')
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;
