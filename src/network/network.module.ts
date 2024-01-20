// network.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Networks } from './network.entity';
import { NetworkService } from './network.service';
import { NetworkController } from './network.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Networks])],
  providers: [NetworkService],
  controllers: [NetworkController],
})
export class NetworkModule {}
