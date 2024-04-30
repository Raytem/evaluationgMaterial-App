import { Test } from '@nestjs/testing';
import { AbrasionTypeService } from './abrasion-type.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AbrasionTypeEntity } from './entities/abrasion-type.entity';
import { Repository } from 'typeorm';
import { PaginationModule } from 'src/services/pagination/pagination.module';
import { PaginationService } from 'src/services/pagination/pagination.service';
import { repositoryMockFactory } from 'src/test/factories/repository-mock.factory';
import { MockType } from 'src/test/types/mock-type.type';

describe('AbrasionTypeService', () => {
  let abrasionTypeService: AbrasionTypeService;
  let abrasionTypeRepository: MockType<Repository<AbrasionTypeEntity>>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PaginationModule],
      providers: [
        AbrasionTypeService,
        PaginationService,
        {
          provide: getRepositoryToken(AbrasionTypeEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    abrasionTypeService = moduleRef.get<AbrasionTypeService>(AbrasionTypeService);
    abrasionTypeRepository = moduleRef.get(getRepositoryToken(AbrasionTypeEntity));
  });

  describe('getAll', () => {
    it('should return all abrasionTypes', async () => {
      abrasionTypeRepository.find.mockReturnValue([]);
      abrasionTypeRepository.findOne;

      expect(await abrasionTypeService.findAll()).toEqual([]);
    });
  });
});
