import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersLandService } from './user.service';
import { UsersLand } from './user.entity';

@Controller('/users/land')
export class UsersLandController {

    constructor(private service: UsersLandService) { }
    
    @Get()
    get(){
        return this.service.getUsersLand;
    }

    @Post()
    create(@Body() usersland: UsersLand) {
        return this.service.createUsersLand(usersland);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUsersLand(params.id);
    }
}