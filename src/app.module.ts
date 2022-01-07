import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [EstudianteModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
