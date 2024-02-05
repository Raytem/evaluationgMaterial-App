import { Multer } from 'multer';

export class NewDesktopVersionFilesDto {
  setup: Multer.file[];
  update: Multer.file[];
}
