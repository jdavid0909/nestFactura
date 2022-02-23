import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacturaModule } from './factura/factura.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'Valeria0909.',
      database: 'facturanest',
      autoLoadEntities: true,
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      synchronize: false,
      migrationsRun: false
    }),
    FacturaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
