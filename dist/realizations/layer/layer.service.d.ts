import { CreateLayerDto } from './dto/create-layer.dto';
import { UpdateLayerDto } from './dto/update-layer.dto';
export declare class LayerService {
    create(createLayerDto: CreateLayerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLayerDto: UpdateLayerDto): string;
    remove(id: number): string;
}
