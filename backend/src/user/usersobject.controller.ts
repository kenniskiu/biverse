import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersObjectService } from './user.service';
import { UsersObject } from './user.entity';

@Controller('/users/object')
export class UsersObjectController {

    constructor(private service: UsersObjectService) { }
    
    @Get()
    get(){
        return this.service.getUsersObject;
    }

    @Post()
    create(@Body() usersobject: UsersObject) {
        return this.service.createUsersLand(usersobject);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUsersLand(params.id);
    }
}