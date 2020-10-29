import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';


@Module({
  imports: [
    ItemsModule,
    GraphQLModule.forRoot({
      autoSchemaFile : 'schema.graphql'
    }),
    MongooseModule.forRoot('mongodb://localhost/nestgraphql2', {useFindAndModify : false})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
