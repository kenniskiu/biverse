import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository} from 'typeorm';
import { ethers } from 'ethers';
import { response } from 'express';
import { sign } from 'crypto';
import { stringify } from 'querystring';

@Injectable()
export class VerificationService {
    constructor
    (@InjectRepository(User) private usersRepository: Repository<User>) { }
    async validate(request, response,params){
        let val1 = Math.floor(Date.now()/100000);
        let validationCodeRange1 = val1.toString()
        const rawCode = await request.body
        const intCode = rawCode.code
        const code = intCode.toString()
        const private_key = await params.id
        const ethersSigner = new ethers.Wallet(private_key);
        const signedMsg = await ethersSigner.signMessage(code);
        const signerAddress = ethers.utils.verifyMessage(code,signedMsg)
        const expectedSignerAddress = ethers.utils.verifyMessage(validationCodeRange1,signedMsg);
        if(signerAddress==expectedSignerAddress)
        {
            console.log("true");
            return response.status(200).json({
                error: false,
                data: private_key,
                msg: 'Unauthorized'
            })
        }   
        else{
            console.log("false")
            return response.status(403).json({
                error: true,
                data: false,
                msg: 'Unauthorized'
            })
        }
    }
    
}