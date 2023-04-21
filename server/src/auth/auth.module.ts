import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {UserModule} from "../user/user.module";
import {LocalStrategy} from "./strategies/local.strategies";
import {PassportModule} from "@nestjs/passport";
import {SessionSerializer} from "./serializers/session.serializer";

@Module({
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, SessionSerializer],
    imports: [UserModule, PassportModule.register({session: true})]
})
export class AuthModule {
}
