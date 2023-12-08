
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const paths = [
    'sampleUI',
    'header',
    'all-appointment'
  ]

  return true;


};
