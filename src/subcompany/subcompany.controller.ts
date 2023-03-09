import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubcompanyService } from './subcompany.service';
import { CreateSubcompanyDto } from './dto/create-subcompany.dto';
import { UpdateSubcompanyDto } from './dto/update-subcompany.dto';

@Controller('subcompany')
export class SubcompanyController {
  constructor(private readonly subcompanyService: SubcompanyService) {}

  @Post()
  create(@Body() createSubcompanyDto: CreateSubcompanyDto) {
    return this.subcompanyService.create(createSubcompanyDto);
  }

  @Get()
  findAll() {
    return this.subcompanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subcompanyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubcompanyDto: UpdateSubcompanyDto) {
    return this.subcompanyService.update(+id, updateSubcompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subcompanyService.remove(+id);
  }
}
