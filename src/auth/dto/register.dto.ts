import { IsPasswordsMatchingConstraint } from "@/libs/common/decorators/is-passwords-matching-constraint";
import { IsEmail, IsNotEmpty, IsString, MinLength, Validate } from "class-validator";

export class RegisterDto {
  @IsString({message: 'Имя должно быть строкой'})
  @IsNotEmpty({message: 'Имя обязательно'})
  name: string

  @IsString({message: 'Email должен быть строкой'})
  @IsEmail({}, {message: 'Некорректный email'})
  @IsNotEmpty({message: 'Email обязателен'})
  email: string

  @IsString({message: 'Пароль должен быть строкой'})
  @IsNotEmpty({message: 'Пароль обязателен'})
  @MinLength(6, {message: 'Минимальная длина пароля 6 символов'})
  password: string

  @IsString({message: 'Пароль подтвержения должен быть строкой'})
  @IsNotEmpty({message: 'Пароль подтвержения обязателен'})
  @MinLength(6, {message: 'Пароль подтвержения должен содержать не менее 6 символов'})
  @Validate(IsPasswordsMatchingConstraint,{message: 'Пароли не совпадают'})
  passwordRepeat: string
}