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
        while (_) try {
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
exports.__esModule = true;
var ethers_1 = require("ethers");
var biverseERC20ABI = require("./biverseerc20.abi.json");
var biverseLandERC721ABI = require("./biverselanderc721.abi.json");
var BigNumber = ethers_1.ethers.BigNumber;
var AURORA_RPC = 'https://testnet.aurora.dev/';
var BiverseERC20Address = '0xd321949Ec9e8dE5c60323FcD247Ce2Ec8eB64eEE';
var BiverseLandERC721Address = '0x1879a7338F7682Ae3AeeB3F696eAD5481D789183';
var userAddress = '0x668417616f1502D13EA1f9528F83072A133e8E01'; // this address also the deployer
var privKey = '0xabc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc1';
describe("contract interaction with biverse erc20", function () {
    it("query user balance", function () { return __awaiter(void 0, void 0, void 0, function () {
        var provider, erc20Contract, userBalance, formattedUserBalance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    provider = new ethers_1.ethers.providers.StaticJsonRpcProvider(AURORA_RPC);
                    console.log(provider);
                    erc20Contract = new ethers_1.ethers.Contract(BiverseERC20Address, biverseERC20ABI.abi, provider);
                    console.log(erc20Contract);
                    return [4 /*yield*/, erc20Contract.balanceOf(userAddress)];
                case 1:
                    userBalance = _a.sent();
                    console.log(userBalance);
                    formattedUserBalance = ethers_1.ethers.FixedNumber.fromValue(userBalance, 18);
                    console.log(formattedUserBalance.toString());
                    return [2 /*return*/];
            }
        });
    }); });
    it("create transaction to claim land", function () { return __awaiter(void 0, void 0, void 0, function () {
        var provider, signer, erc20Contract, userAllowance, erc721Contract, tokenId, erc721LandOwner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    provider = new ethers_1.ethers.providers.StaticJsonRpcProvider(AURORA_RPC);
                    signer = new ethers_1.ethers.Wallet(privKey, provider);
                    erc20Contract = new ethers_1.ethers.Contract(BiverseERC20Address, biverseERC20ABI.abi, signer);
                    return [4 /*yield*/, erc20Contract.approve(BiverseLandERC721Address, BigNumber.from(10).pow(18))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, erc20Contract.allowance(userAddress, BiverseLandERC721Address)];
                case 2:
                    userAllowance = _a.sent();
                    console.log(ethers_1.ethers.FixedNumber.fromValue(userAllowance, 18));
                    expect(userAllowance).toEqual(BigNumber.from(10).pow(18));
                    erc721Contract = new ethers_1.ethers.Contract(BiverseLandERC721Address, biverseLandERC721ABI.abi, signer);
                    return [4 /*yield*/, erc721Contract.claimLand("6PH57VP3+PR60000", userAddress)];
                case 3:
                    _a.sent();
                    tokenId = ethers_1.ethers.utils.solidityKeccak256(["string"], ["6PH57VP3+PR60000"]);
                    return [4 /*yield*/, erc721Contract.ownerOf(tokenId.toString())];
                case 4:
                    erc721LandOwner = _a.sent();
                    console.log("tokenId:", tokenId);
                    console.log("owner:", erc721LandOwner);
                    expect(erc721LandOwner).toEqual(userAddress);
                    return [2 /*return*/];
            }
        });
    }); }, 600000);
});
