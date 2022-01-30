import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as biverseERC20ABI from './biverseerc20.abi.json';
import * as biverseLandERC721ABI from './biverselanderc721.abi.json';

const BigNumber = ethers.BigNumber;
const AURORA_RPC = 'https://testnet.aurora.dev/'

@Injectable()
export class ContractService {
    async check(){
        const privKey = '0xabc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc1'
        const BiverseERC20Address = '0xd321949Ec9e8dE5c60323FcD247Ce2Ec8eB64eEE'
        const BiverseLandERC721Address = '0x1879a7338F7682Ae3AeeB3F696eAD5481D789183'
        const userAddress = '0x668417616f1502D13EA1f9528F83072A133e8E01' 
        const provider = new ethers.providers.StaticJsonRpcProvider(AURORA_RPC)
        const signer = new ethers.Wallet(privKey, provider);
        const erc20Contract = new ethers.Contract(BiverseERC20Address, biverseERC20ABI.abi, signer);
        await erc20Contract.approve(BiverseLandERC721Address, BigNumber.from(10).pow(18))
        const userAllowance = await erc20Contract.allowance(userAddress, BiverseLandERC721Address);
        console.log(ethers.FixedNumber.fromValue(userAllowance, 18))
        expect(userAllowance).toEqual(BigNumber.from(10).pow(18))
        // allow contract to spend user token

        // then we can call claim land function
        const erc721Contract = new ethers.Contract(BiverseLandERC721Address, biverseLandERC721ABI.abi, signer);
        await erc721Contract.claimLand("6PH57VP3+PR60000", userAddress);

        const tokenId = ethers.utils.solidityKeccak256(["string"], ["6PH57VP3+PR60000"]);
        const erc721LandOwner = await erc721Contract.ownerOf(tokenId.toString());
    }
}
