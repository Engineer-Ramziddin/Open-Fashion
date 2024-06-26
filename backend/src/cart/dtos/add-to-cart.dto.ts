import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ProductDocument } from '../../products/schemas/product.schema';

export class AddToCartDto {
  @IsOptional()
  product?: ProductDocument;

  @IsNumber()
  qty: number;

  @IsOptional()
  @IsString()
  productId?: string;
}
