import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
export class RegisterDto {
  @ApiProperty({default: "user"})
  @IsString()
  @MinLength(4, { message: 'Username is too short.' })
  @MaxLength(20, { message: 'Username is too long.' })
  name: string;

  @ApiProperty({default: "user@gmail.com"})
  @IsEmail({}, { message: 'Email address is not valid.' })
  email: string;

    @ApiProperty({default: "password"})
  @IsString()
  @MinLength(5, { message: 'Password is too short.' })
  @MaxLength(20, { message: 'Please is too long.' })
  password: string;
}
