import { AllTypesService } from './all-types.service';
import { ReturnAllTypesDto } from './dto/return-all-types.dto';
export declare class AllTypesController {
    private readonly allTypesService;
    constructor(allTypesService: AllTypesService);
    findAll(): Promise<ReturnAllTypesDto>;
}
