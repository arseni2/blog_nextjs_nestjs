import { INestApplication } from '@nestjs/common';
import * as session from "express-session"
import * as passport from "passport"

export function configApp(app: INestApplication) {
    app.use(
        session({
            secret: "keyboard",
            resave: false,
            saveUninitialized: false
        })
    )
    app.use(passport.initialize())
    app.use(passport.session())
    app.enableCors({
        origin: [/^(.*)/],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 200,
        credentials: true,
        allowedHeaders:
            'Origin,X-Requested-With,Content-Type,Accept,Authorization,authorization,X-Forwarded-for',
    });
}