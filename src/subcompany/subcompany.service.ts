import { Injectable } from '@nestjs/common';
import { CreateSubcompanyDto } from './dto/create-subcompany.dto';
import { UpdateSubcompanyDto } from './dto/update-subcompany.dto';

@Injectable()
export class SubcompanyService {
  create(createSubcompanyDto: CreateSubcompanyDto) {
    return 'This action adds a new subcompany';
  }

  findAll() {
    return `This action returns all subcompany`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subcompany`;
  }

  update(id: number, updateSubcompanyDto: UpdateSubcompanyDto) {
    return `This action updates a #${id} subcompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcompany`;
  }
}
