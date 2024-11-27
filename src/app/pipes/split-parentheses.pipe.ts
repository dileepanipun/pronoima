import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'splitParentheses'
})
export class SplitParenthesesPipe implements PipeTransform {
  transform(value: string, index: number): string {
    if (!value) return '';

    const matches = value.match(/(.*?)(\s*\(.*\))?$/);
    if (!matches) return value;

    // index 0 returns the main text, index 1 returns the parenthetical part
    return index === 0 ? matches[1]?.trim() || '' : matches[2]?.trim() || '';
  }
}
