import { IsEmail, IsNotEmpty } from 'class-validator'

export class ResetPasswordDto {
	@IsEmail({}, { message: 'Введите корректный адрес электронныой почты' })
	@IsNotEmpty({ message: 'Поле ввода не может быть пустым' })
	email: string
}
