import { Injectable } from '@nestjs/common';
import { RepositoryProduct } from 'src/repository/repository-product';
import { ChangeQuantityProductDto } from './dto/change-quantity-product-dto';

@Injectable()
export class ChangeQuantityProductUseCase {
  constructor(private readonly repositoryProduct: RepositoryProduct) {}

  async execute(productId: string, { stock }: ChangeQuantityProductDto) {
    await this.repositoryProduct.changeStock(productId, { stock });
  }
}
