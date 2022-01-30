import { Controller, Post,
        Get, Request, Response ,Param, UseGuards, Res,
        } from '@nestjs/common';    
import { VerificationService } from './verification.service';

@Controller('verification')
export class VerificationController {
    constructor(private service: VerificationService) { }
    @Post('/:id')
    postID(@Request() request, @Response() response,@Param() params){
        return this.service.validate(request,response,params)
    }
}