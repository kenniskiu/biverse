import { Controller,Post,Body } from '@nestjs/common';
import { ContractService } from './contract.service';

@Controller('contract')
export class ContractController {
    constructor(private service: ContractService) { }
    @Post()
    transaction() {
        return this.service.check();
    }
}
