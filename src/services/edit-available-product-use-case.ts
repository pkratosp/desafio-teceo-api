import { RepositoryProduct } from 'src/repository/repository-product';
import { EditAvailableProductDto } from './dto/edit-available-product-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EditAvailableProductUseCase {
  constructor(private readonly repositoryProduct: RepositoryProduct) {}

  async execute({ available, productsId }: EditAvailableProductDto) {
    await this.repositoryProduct.editAvaliable({ available, productsId });
  }
}
