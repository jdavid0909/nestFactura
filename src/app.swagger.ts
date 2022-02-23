import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";



export const initSwagger = (app:INestApplication) =>{
    const swaggerConfig = new DocumentBuilder()
    .setTitle('My blog')
    .setDescription(' Esta es una api de pruebas para enteder como funciona nest')
    .build();
    const documnet = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('/docs',app,documnet);
}