import { Injectable } from '@nestjs/common';
import { RepositoryParamPagination } from 'src/repository/repository-param-pagination';
import { RepositoryProduct } from 'src/repository/repository-product';
import { PrismaService } from '../prisma.service';
import { Products } from '@prisma/client';
import { EditAvailableProductDto } from 'src/services/dto/edit-available-product-dto';
import { ChangeQuantityProductDto } from 'src/services/dto/change-quantity-product-dto';

@Injectable()
export class RepositoryProductPrisma implements RepositoryProduct {
  constructor(private readonly prismaService: PrismaService) {}

  async editAvaliable({
    available,
    productsId,
  }: EditAvailableProductDto): Promise<void> {
    await this.prismaService.products.updateMany({
      data: {
        avaliable: available,
      },
      where: {
        id: {
          in: productsId,
        },
      },
    });
  }

  async listarProdutos({
    page,
  }: RepositoryParamPagination): Promise<Products[]> {
    const products = await this.prismaService.products.findMany({
      skip: (page - 1) * 20,
      take: 20,
    });

    return products;
  }

  async changeStock(
    productId: string,
    data: ChangeQuantityProductDto,
  ): Promise<void> {
    await this.prismaService.products.update({
      data: {
        stock: data.stock,
      },
      where: {
        id: productId,
      },
    });
  }
}
