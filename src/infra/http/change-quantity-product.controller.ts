import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ChangeQuantityProductUseCase } from 'src/services/change-quantity-product-use-case';
import { ChangeQuantityProductDto } from 'src/services/dto/change-quantity-product-dto';

@Controller('/products/quantity')
export class ChangeQuantityProductController {
  constructor(
    private readonly changeQuantityProductUseCase: ChangeQuantityProductUseCase,
  ) {}

  @Patch(':productId')
  async handle(
    @Param('productId') productId: string,
    @Body() body: ChangeQuantityProductDto,
  ) {
    try {
      await this.changeQuantityProductUseCase.execute(productId, body);
    } catch (error) {
      throw error;
    }
  }
}
