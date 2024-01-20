// // network.controller.ts

// import { Controller, Post, Body } from '@nestjs/common';

// @Controller('api/network')
// export class NetworkController {
//   @Post()
//   handleNetworkData(@Body() data: any): string {
//     // Process the received network data
//     console.log('Received network data:', data);

//     // You can store the data in a database or perform any other necessary actions

//     return 'Data received successfully';
//   }
// }
// network.controller.ts

// import { Controller, Post, Body } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Network } from './network.entity';

// @Controller('api/network')
// export class NetworkController {
//   constructor(
//     @InjectRepository(Network)
//     private readonly networkRepository: Repository<Network>,
//   ) {}

//   @Post()
// //   async storeNetworkData(@Body() network: any): Promise<string> {
// //     // Create a new NetworkData entity with the received data
// //     const newNetwork = this.networkRepository.create(network);

// //     // Save the entity in the database
// //     await this.networkRepository.save(newNetwork);

// //     return 'Network data received and stored successfully';
// //   }
// // }
//   //handleNetworkData(@Body() data: any): string {
//     async storeNetworkData(@Body() network: any): Promise<string> {
//         //     // Create a new NetworkData entity with the received data
//           const newNetwork = this.networkRepository.create(network);
        
//         //     // Save the entity in the database
//          await this.networkRepository.save(newNetwork);
//     // Process the received network data
//     console.log('Received network data:', network);

//     // You can store the data in a database or perform any other necessary actions

//     return 'Data received successfully';
//   }
// }
// network.controller.ts

// import { Controller, Post, Body } from '@nestjs/common';
// import { NetworkService } from './network.service';
// import { Network } from './network.entity';

// @Controller('api/network')
// export class NetworkController {
//   constructor(private readonly networkService: NetworkService) {}

//   @Post()
//   async storeNetworkData(@Body() network: any): Promise<string> {
//     // Create a new NetworkData entity with the received data
//     const newNetwork = this.networkService.create(network);
//      console.log('Received network data:', network);
//     return 'Network data received and stored successfully';
//   }
// }
// network.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { NetworkService } from './network.service';
import { Networks } from './network.entity';

@Controller('api/network')
export class NetworkController {
  constructor(private readonly networkService: NetworkService) {}

  @Post()
  async storeNetworkData(@Body() networkData: Networks): Promise<string> {
    // Store the received network data in the database
    await this.networkService.create(networkData);
    console.log(networkData)
    return 'Network data received and stored successfully';
  }

  @Get()
  async findAll(){
     return this.networkService.findAll()
     }
}

