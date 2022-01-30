import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn()
    id: string
    @Column({
        nullable: true,
        default: null
    })
    placeVisited: number    
    @Column({
        nullable: true,
        default: null
        })
    userBalance: number
    
}
export class UsersLand{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    koordinatx: number
    @Column()
    koordinaty: number
    @Column()
    landPrice: number
    @Column()
    landKontrak: number // nembak erc721 ke blockchain

}
export class UsersObject{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    objName: string
    @Column()
    objModel: number // nembak untuk dapetin 3D model ke app
    @Column()
    objJpeg: string
    //@Column()
    //objKontrak: number // nemback erc721 ke blockchain

}