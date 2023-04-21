import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private repo: Repository<UserEntity>,
    ) {
    }

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.repo.save(createUserDto)
    }

    findAll() {
        return `This action returns all user`;
    }

    async findByName(name: string) {
        return this.repo.findOne({where: {name}})
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
