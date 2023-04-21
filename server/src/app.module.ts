import {Module} from '@nestjs/common';
import {ArticleModule} from './article/article.module';
import {UserModule} from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123',
            database: 'blog',
            synchronize: true,
            autoLoadEntities: true
        }),
        UserModule,
        ArticleModule,
        AuthModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
