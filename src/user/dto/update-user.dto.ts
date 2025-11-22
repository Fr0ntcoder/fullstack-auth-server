import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class UpdateUserDto {
	@IsString({ message: 'Имя должно быть строкой' })
	@IsNotEmpty({ message: 'Имя обязательно' })
	name: string

	@IsString({ message: 'Email должен быть строкой' })
	@IsEmail({}, { message: 'Некорректный email' })
	@IsNotEmpty({ message: 'Email обязателен' })
	email: string

	@IsBoolean({ message: 'isTwoFaсtorAuth должно быть булевым значением' })
	isTwoFaсtorAuth: boolean
}
