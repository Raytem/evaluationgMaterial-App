import { LayerService } from './layer.service';
import { CreateLayerDto } from './dto/create-layer.dto';
import { UpdateLayerDto } from './dto/update-layer.dto';
export declare class LayerController {
    private readonly layerService;
    constructor(layerService: LayerService);
    create(createLayerDto: CreateLayerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLayerDto: UpdateLayerDto): string;
    remove(id: string): string;
}
