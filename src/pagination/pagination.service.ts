import { Injectable } from '@nestjs/common';
import { PaginationDto } from './dto/pagination.dto';
import { PostgresPagination } from './dto/postgresPagination';

@Injectable()
export class PaginationService {
  paginate(
    paginationDto: PaginationDto,
    defaultPerPage = 20,
  ): PostgresPagination {
    const page = paginationDto?.page || 1;
    const perPage = paginationDto?.perPage || defaultPerPage;

    const skip = (page - 1) * perPage;

    return {
      take: perPage,
      skip,
    };
  }
}
