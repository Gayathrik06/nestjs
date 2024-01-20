// // network.service.ts

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Network } from './network.entity';

// @Injectable()
// export class NetworkService {
//   constructor(
//     @InjectRepository(Network)
//     private readonly networkRepository: Repository<Network>,
//   ) {}

//   async create(network: Network): Promise<Network> {
//     return this.networkRepository.save(network);
//   }
// }
// network.service.ts

// import { Injectable, Logger } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Network } from './network.entity';
// import { exec } from 'child_process';

// @Injectable()
// export class NetworkService {
//   private readonly logger = new Logger(NetworkService.name);

//   constructor(
//     @InjectRepository(Network)
//     private readonly networkDataRepository: Repository<Network>,
//   ) {}

//   async create(networkData: Network): Promise<Network> {
//     try {
//       // Save the entity in the database using TypeORM
//       const savedNetworkData = await this.networkDataRepository.save(networkData);

//       // Log the information
//       this.logger.log('Network data saved to the database:', savedNetworkData);

//       // You can execute additional SQL commands if needed
//       // Example: await this.networkDataRepository.query('INSERT INTO your_table (column1, column2) VALUES ($1, $2)', [value1, value2]);

//       return savedNetworkData;
//     } catch (error) {
//       this.logger.error('Error saving network data to the database', error);
//       throw error;
//     }
//   }
//   private generateInsertStatement(tableName: string, data: Network): string {
//     const columns = Object.keys(data).join(', ');
//     const values = Object.values(data).map(value => `'${value}'`).join(', ');

//     return `INSERT INTO api {url,method,status} VALUES {'response.url(),request.response.method(),response.status()'}`;
//   }

//   private executeSqlShellCommand(command: string): Promise<void> {
//     return new Promise((resolve, reject) => {
//       // Use the 'exec' function from the child_process module to execute the SQL Shell command
//       exec(`echo "${command}" | psql -h localhost -U postgres -d postgres`, (error, stdout, stderr) => {
//         if (error) {
//           // Log any errors encountered during the execution
//           this.logger.error(`Error executing SQL command: ${stderr}`);
//           reject(error);
//         } else {
//           // Log the output if needed
//           this.logger.log(`SQL command executed successfully: ${stdout}`);
          
//           resolve();
//         }
//       });
//     });
//   }
  // network.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Networks } from './network.entity';

@Injectable()
export class NetworkService {
  constructor(
    @InjectRepository(Networks)
    private readonly networkRepository: Repository<Networks>,
  ) {}

  async create(networkData: Networks): Promise<Networks> {
    return this.networkRepository.save(networkData);
  }

  async findAll():Promise<Networks[]>{
    return this.networkRepository.find();
  }
}
