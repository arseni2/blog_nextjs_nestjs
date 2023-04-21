import {Injectable} from '@nestjs/common';
import {CreateArticleDto} from './dto/create-article.dto';
import {Repository} from "typeorm";
import {ArticleEntity} from "./entities/article.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleEntity)
        private repo: Repository<ArticleEntity>
    ) {
    }

    create(createArticleDto: CreateArticleDto, user_id: number) {
        return this.repo.save({
            ...createArticleDto,
            author: {id: user_id}})
    }

    findAll() {
        return this.repo.find()
    }

    findOne(id: number) {
        return this.repo.findOneBy({id})
    }
}
