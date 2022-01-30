import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { VerificationModule } from './verification/verification.module';
import { ContractModule } from './contract/contract.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    VerificationModule,
    ContractModule]
})
export class AppModule {}
