import { Body, Controller, Param, Patch } from '@nestjs/common';
import { EditAvailableProductDto } from 'src/services/dto/edit-available-product-dto';
import { EditAvailableProductUseCase } from 'src/services/edit-available-product-use-case';

@Controller('/products')
export class EditAvailableProductController {
  constructor(
    private readonly editAvailableProductUseCase: EditAvailableProductUseCase,
  ) {}

  @Patch()
  async handle(@Body() data: EditAvailableProductDto) {
    try {
      await this.editAvailableProductUseCase.execute(data);
    } catch (error) {
      throw error;
    }
  }
}
