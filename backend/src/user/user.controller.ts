import { Controller, Post, Body, Get, Put, Delete,Param,Request} from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }
    @Post('store')
    store(@Request() request){
        return this.service.store(request);
    }
    
    @Get('')
    get(@Request() request){
        return this.service.getPlaceVisited(request);
    }

    @Put(':id')
    update(@Param() params) {
        return this.service.increment(params);
    }
    

}