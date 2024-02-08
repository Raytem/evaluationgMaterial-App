import { Multer } from 'multer';

export class NewDesktopVersionFilesDto {
  macSetup: Multer.file[];
  winSetup: Multer.file[];
}
