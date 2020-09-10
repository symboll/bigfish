import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Episode } from '@libs/db/models/episode.models';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Episode
})
@ApiTags('课时')
@Controller('episodes')
export class EpisodesController {
  constructor(
    @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>
  ) {}
}
