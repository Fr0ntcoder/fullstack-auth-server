import { IsNotEmpty, IsString } from "class-validator";

export class ConfiramtionDto {
  @IsString({message: 'Токен должен быть строкой'})
  @IsNotEmpty({message: 'Поле токен не должно быть пустым'})
  token: string
}