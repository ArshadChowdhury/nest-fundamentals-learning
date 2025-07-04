import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
    getAllProperty(): string {
        return 'All Properties fetched';
    }

    getSingleProperty(id): string {
        return `Single Property number ${id}`;
    }

    createProperty(body): string {
        return `Property created ${body.title} ${body.message}`;
    }

}
