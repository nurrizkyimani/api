/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedUserDTO } from 'src/auth/dto/authenticated-user.dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AdminGuard extends AuthGuard('jwt') {
  constructor(private usersService: UsersService) {
    super();
  }

  // Get username from JWT payload and inject full user from repository
  // req.user of type User will be accessible anywhere the guard is called
  handleRequest(err: any, user: AuthenticatedUserDTO): any {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    const userfull = (async (): Promise<User> => {
      const authUser = await this.usersService.findOne(user);
      if (!authUser) {
        throw new UnauthorizedException();
      }
      if (!authUser.isAdmin) {
        throw new UnauthorizedException('Your are not an admin');
      }
      return authUser;
    })();

    return userfull;
  }
}
