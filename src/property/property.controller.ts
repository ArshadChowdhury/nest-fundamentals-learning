import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {

    constructor(private readonly propertyService: PropertyService) { }

    @Get()
    getHello(): string {
        return this.propertyService.getAllProperty();
    }

    @Get(':id')
    getSingleProperty(@Param('id') id: string): string {
        return this.propertyService.getSingleProperty(id);
    }

    @Post()
    createProperty(@Body() body): string {
        return this.propertyService.createProperty(body);
    }

}
