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
exports.VerificationController = void 0;
var common_1 = require("@nestjs/common");
var VerificationController = /** @class */ (function () {
    function VerificationController(service) {
        this.service = service;
    }
    VerificationController.prototype.postID = function (request, response, params) {
        return this.service.validate(request, response, params);
    };
    __decorate([
        common_1.Post('/:id'),
        __param(0, common_1.Request()), __param(1, common_1.Response()), __param(2, common_1.Param())
    ], VerificationController.prototype, "postID");
    VerificationController = __decorate([
        common_1.Controller('verification')
    ], VerificationController);
    return VerificationController;
}());
exports.VerificationController = VerificationController;
