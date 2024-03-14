import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//importar
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/constans';
import { PeliculaModule } from './pelicula/pelicula.module';

@Module({
  imports: [
    ConfigModule.forRoot({  
      envFilePath: '.env',
      isGlobal:true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER), 
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],//FORMA EN QUE SE LLAMARAN LAS ENTIDADES
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PeliculaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
