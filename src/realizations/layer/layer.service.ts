import { Injectable } from '@nestjs/common';
import { CreateLayerDto } from './dto/create-layer.dto';
import { Repository } from 'typeorm';
import { LayerEntity } from './entities/layer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LayerService {
  constructor(
    @InjectRepository(LayerEntity)
    private layerRepository: Repository<LayerEntity>,
  ) {}
  async create(createLayerDto: CreateLayerDto) {
    return 'This action adds a new layer';
  }
}
