import {
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';
import { Track } from 'src/tracks/track.entity';
import { Exists } from 'src/shared/validators/exists.validation';
import { ListeningPeriod } from '../listening.entity';

export class FindListeningsForTrackDTO {
  @IsUUID('all')
  @Exists(Track)
  id: string;

  @IsDateString()
  after: Date;

  @IsDateString()
  before: Date;

  @IsNotEmpty()
  @IsString()
  @IsIn(['hour', 'day', 'week', 'month', 'year'])
  period: ListeningPeriod;
}
