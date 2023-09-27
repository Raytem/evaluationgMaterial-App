import { StretchingCompressionService } from './stretching-compression.service';
import { CreateStretchingCompressionDto } from './dto/create-stretching-compression.dto';
import { UpdateStretchingCompressionDto } from './dto/update-stretching-compression.dto';
export declare class StretchingCompressionController {
    private readonly stretchingCompressionService;
    constructor(stretchingCompressionService: StretchingCompressionService);
    create(createStretchingCompressionDto: CreateStretchingCompressionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateStretchingCompressionDto: UpdateStretchingCompressionDto): string;
    remove(id: string): string;
}
