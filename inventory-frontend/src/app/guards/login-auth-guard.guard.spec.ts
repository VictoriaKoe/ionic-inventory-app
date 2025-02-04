import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './login-auth-guard.guard';

describe('loginAuthGuard', () => {
  let guard: AuthGuard;

  beforeEach (() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);

    it('should allow the logged user to access page'), () =>
      expect(guard.canActivate()).toBeTruthy();
    
  })
});
