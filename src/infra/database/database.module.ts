import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RepositoryProduct } from 'src/repository/repository-product';
import { RepositoryProductPrisma } from './repository/repository-product-prisma';

@Module({
  providers: [
    PrismaService,
    {
      provide: RepositoryProduct,
      useClass: RepositoryProductPrisma,
    },
  ],
  exports: [PrismaService, RepositoryProduct],
})
export class DatabaseModule {}
