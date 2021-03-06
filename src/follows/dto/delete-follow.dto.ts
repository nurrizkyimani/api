import { Exists } from 'src/shared/validators/exists.validation';
import { User } from 'src/users/user.entity';

export class DeleteFollowDTO {
  @Exists(User)
  to: User;

  @Exists(User)
  from: User;
}
