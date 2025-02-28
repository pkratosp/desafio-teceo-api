import { Controller, Get, Query } from '@nestjs/common';
import { FetchProductUseCase } from 'src/services/fetch-product-use-case';

@Controller('/products')
export class FetchProductController {
  constructor(private readonly fetchProductUseCase: FetchProductUseCase) {}

  @Get()
  async handle(@Query('page') page: string) {
    try {
      const products = await this.fetchProductUseCase.execute({ page: +page });

      return {
        products,
      };
    } catch (error) {
      throw error;
    }
  }
}
