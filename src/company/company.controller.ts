import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompanyDto } from './dto/company.dto';
import { CompanyService } from './company.service';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async getCompanies() {
    return this.companyService.get();
  }

  @Get(':id')
  async getCompany(@Param('id') id: string) {
    return this.companyService.getById(id);
  }

  @Post('company')
  async createCompany(@Body() dto: CompanyDto) {
    return this.companyService.createCompany(dto);
  }

  @Patch('company/:id')
  async updateCompany(@Param('id') id: string, @Body() dto: CompanyDto) {
    return this.companyService.updateCompany(id, dto);
  }

  @Delete(':id')
  async deleteCompany(@Param('id') id: string) {
    return this.companyService.delete(id);
  }
}
