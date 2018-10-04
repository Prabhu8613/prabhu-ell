import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'table-filter'
})
export class TableFilterPipe implements PipeTransform {
    transform(items: any[], filter: any[]): any {
        
    }
}