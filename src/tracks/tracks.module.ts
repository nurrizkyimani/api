import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListeningsModule } from 'src/listenings/listenings.module';
import { UsersModule } from 'src/users/users.module';

import { Track } from './track.entity';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Track]), forwardRef(() => UsersModule), ListeningsModule],
  controllers: [TracksController],
  providers: [TracksService],
  exports: [TracksService]
})
export class TracksModule {}
