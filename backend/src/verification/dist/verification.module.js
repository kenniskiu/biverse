"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VerificationModule = void 0;
var common_1 = require("@nestjs/common");
var verification_service_1 = require("./verification.service");
var verification_controller_1 = require("./verification.controller");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("src/user/user.entity");
var VerificationModule = /** @class */ (function () {
    function VerificationModule() {
    }
    VerificationModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
            providers: [verification_service_1.VerificationService],
            controllers: [verification_controller_1.VerificationController]
        })
    ], VerificationModule);
    return VerificationModule;
}());
exports.VerificationModule = VerificationModule;
