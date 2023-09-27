import { CreateStretchingCompressionDto } from './dto/create-stretching-compression.dto';
import { UpdateStretchingCompressionDto } from './dto/update-stretching-compression.dto';
export declare class StretchingCompressionService {
    create(createStretchingCompressionDto: CreateStretchingCompressionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStretchingCompressionDto: UpdateStretchingCompressionDto): string;
    remove(id: number): string;
}
