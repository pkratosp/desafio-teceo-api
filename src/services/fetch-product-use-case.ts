import { RepositoryProduct } from 'src/repository/repository-product';
import { FetchProductDto } from './dto/fetch-product-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FetchProductUseCase {
  constructor(private readonly repositoryProduct: RepositoryProduct) {}

  async execute({ page }: FetchProductDto) {
    const products = await this.repositoryProduct.listarProdutos({ page });

    return products;
  }
}
