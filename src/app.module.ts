import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NetworkController } from './network/network.controller';
import { Networks } from './network/network.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NetworkService } from './network/network.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 8432,
      username: 'postgres',
      password: 'master',
      database: 'postgres',
      entities: [Networks],
      synchronize: true,
      logging:true
    }),
    TypeOrmModule.forFeature([Networks]),
  ],

  controllers: [AppController, NetworkController],
  providers: [AppService,NetworkService],
})
export class AppModule {}
