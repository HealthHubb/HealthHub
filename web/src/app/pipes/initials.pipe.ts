import { Pipe, PipeTransform } from '@angular/core';
import { ScanFace } from 'lucide-angular';
import { endWith } from 'rxjs';

@Pipe({
  name: 'initials',
  standalone: true 
})
export class InitialsPipe implements PipeTransform {

  transform(fullName: string): string {
    if (!fullName) return '';

    const names = fullName.split(' ');
    let initials = '';
    
    if (names.length > 0) {
      initials += names[0].charAt(0);
      if (names.length > 1) {
        initials += names[names.length - 1].charAt(0);
      } 
    }

    return initials.toUpperCase();
  }
}
