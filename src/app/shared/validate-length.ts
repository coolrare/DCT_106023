import { AbstractControl } from '@angular/forms';

export function ValidateSubtitle(c: AbstractControl) {
  if (c.value.length > 5) {
    return {
      'validate-length': true
    };
  } else {
    return null;
  }
}
