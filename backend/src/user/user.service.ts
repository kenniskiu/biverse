import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,createConnection,getConnection} from 'typeorm';
import { User, UsersLand,UsersObject } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUserID(user: User): Promise<User[]> {
        return await this.usersRepository.find();
        
    }
    
    async store(request){
        const info = await request.body
        const ID = info.id
        const balance = info.balance
        const check = await this.usersRepository.find({
            select: ["id"],
            where: [{ "id": ID }]
        })
        console.log(check);
        if(!check.length)
        {
            await getConnection()
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
            { "id": ID,
           "userBalance": balance}
        ])
        .execute();
        }
        else {
            console.log("already stored")
        }
    }
    
    async getPlaceVisited(_id:number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["placeVisited"],
            where: [{ "id": _id }]
        });
    }

    async increment(id: number) {
        await getConnection()
        .createQueryBuilder()
        .update(User)
        .set({
            placeVisited:()=>"placeVisited+1"
        })
        .where("id = :id", { id: id })
        .execute();
      }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
    async createUser(user: User) {
        this.usersRepository.insert(user);
    }
}
export class UsersLandService {

    constructor(@InjectRepository(UsersLand) private usersRepository: Repository<UsersLand>) { }

    async getUsersLand(usersland: UsersLand): Promise<UsersLand[]> {
        return await this.usersRepository.find();
    }
    async updateUsersLand(usersland: UsersLand) {
        this.usersRepository.save(usersland)
    }

    async deleteUsersLand(usersland: UsersLand) {
        this.usersRepository.delete(usersland);
    }
    async createUsersLand(usersland: UsersLand) {
        this.usersRepository.insert(usersland);
    }
}

export class UsersObjectService {

    constructor(@InjectRepository(UsersObject) private usersRepository: Repository<UsersObject>) { }

    async getUsersObject(usersobject: UsersObject): Promise<UsersObject[]> {
        return await this.usersRepository.find();
    }
    async updateUsersObject(usersobject: UsersObject) {
        this.usersRepository.save(usersobject)
    }

    async deleteUsersLand(usersobject: UsersObject) {
        this.usersRepository.delete(usersobject);
    }
    async createUsersLand(usersobject: UsersObject) {
        this.usersRepository.insert(usersobject);
    }
}