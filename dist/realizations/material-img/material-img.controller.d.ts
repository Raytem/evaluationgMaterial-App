import { MaterialImgService } from './material-img.service';
import { CreateMaterialImgDto } from './dto/create-material-img.dto';
import { UpdateMaterialImgDto } from './dto/update-material-img.dto';
export declare class MaterialImgController {
    private readonly materialImgService;
    constructor(materialImgService: MaterialImgService);
    create(createMaterialImgDto: CreateMaterialImgDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMaterialImgDto: UpdateMaterialImgDto): string;
    remove(id: string): string;
}
