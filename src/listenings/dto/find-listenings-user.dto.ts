import { IsDateString, IsIn, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/users/user.entity';
import { Exists } from 'src/shared/validators/exists.validation';
import { ListeningPeriod } from '../listening.entity';

export class FindListeningsForUserDTO {
  @IsNotEmpty()
  @IsString()
  @Exists(User)
  username: string;

  @IsDateString()
  after: Date;

  @IsDateString()
  before: Date;

  @IsNotEmpty()
  @IsString()
  @IsIn(['hour', 'day', 'week', 'month', 'year'])
  period: ListeningPeriod;
}
