import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../../user/entities/user.entity";

@Entity('Article')
export class ArticleEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string;

    @Column()
    body: string

    @ManyToOne(type => UserEntity, user => user.articles)
    author: UserEntity;
}
