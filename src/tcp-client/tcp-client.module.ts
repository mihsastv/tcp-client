import { Module } from '@nestjs/common';
import { TcpClientService } from './tcp-client.service';

@Module({
  providers: [TcpClientService]
})
export class TcpClientModule {}
