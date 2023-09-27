import { CreateMaterialImgDto } from './dto/create-material-img.dto';
import { UpdateMaterialImgDto } from './dto/update-material-img.dto';
export declare class MaterialImgService {
    create(createMaterialImgDto: CreateMaterialImgDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMaterialImgDto: UpdateMaterialImgDto): string;
    remove(id: number): string;
}
