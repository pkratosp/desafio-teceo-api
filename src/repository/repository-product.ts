import { EditAvailableProductDto } from 'src/services/dto/edit-available-product-dto';
import { RepositoryParamPagination } from './repository-param-pagination';
import { Products } from '@prisma/client';
import { ChangeQuantityProductDto } from 'src/services/dto/change-quantity-product-dto';

export abstract class RepositoryProduct {
  abstract editAvaliable({
    available,
    productsId,
  }: EditAvailableProductDto): Promise<void>;
  abstract listarProdutos(data: RepositoryParamPagination): Promise<Products[]>;
  abstract changeStock(
    productId: string,
    data: ChangeQuantityProductDto,
  ): Promise<void>;
}
