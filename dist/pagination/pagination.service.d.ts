import { PaginationDto } from './dto/pagination.dto';
import { PostgresPagination } from './dto/postgresPagination';
export declare class PaginationService {
    paginate(paginationDto: PaginationDto, defaultPerPage?: number): PostgresPagination;
}
