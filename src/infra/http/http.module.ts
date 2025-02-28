import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// controller
import { FetchProductController } from './fetch-product.controller';
import { EditAvailableProductController } from './edit-available-product.controller';
import { ChangeQuantityProductController } from './change-quantity-product.controller';

// services
import { FetchProductUseCase } from 'src/services/fetch-product-use-case';
import { EditAvailableProductUseCase } from 'src/services/edit-available-product-use-case';
import { ChangeQuantityProductUseCase } from 'src/services/change-quantity-product-use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [
    FetchProductController,
    EditAvailableProductController,
    ChangeQuantityProductController,
  ],
  providers: [
    FetchProductUseCase,
    EditAvailableProductUseCase,
    ChangeQuantityProductUseCase,
  ],
})
export class HttpModule {}
