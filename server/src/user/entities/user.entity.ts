import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ArticleEntity} from "../../article/entities/article.entity";

@Entity('User')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    password: string

    @OneToMany(type => ArticleEntity, article => article.author)
    articles: ArticleEntity[];
}
