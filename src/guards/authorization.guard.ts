import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private allowdRoles: string[]) {}

  canActivate(context: ExecutionContext): boolean {
    const host = context.switchToHttp();
    const request = host.getRequest();
    const user = request.user;
    const allowed = this.isAllowd(user.roles);
    console.log('user is allowed: ', allowed);
    if (!allowed) {
      console.log(
        'User is authenticated but not authorized, denying access...',
      );
      throw new ForbiddenException();
    }
    return true;
  }

  isAllowd(userRoles: string[]): boolean {
    console.log('Comparing user roles: ', this.allowdRoles, userRoles);
    let allowed = false;
    userRoles.forEach((userRole) => {
      console.log('Checking if role is allowed ', userRole);
      if (!allowed && this.allowdRoles.includes(userRole)) {
        allowed = true;
      }
    });
    return allowed;
  }
}
