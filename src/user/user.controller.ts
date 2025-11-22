import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common'
import { UserRole } from 'generated/prisma'

import { Auth } from '@/auth/decorators/auth.decorator'
import { Authorized } from '@/auth/decorators/authorized.decorators'

import { UserService } from './user.service'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Auth(UserRole.REGULAR)
	@HttpCode(HttpStatus.OK)
	@Get('profile')
	public async findProfile(@Authorized('id') userId: string) {
		return this.userService.findById(userId)
	}

	@Auth(UserRole.REGULAR)
	@HttpCode(HttpStatus.OK)
	@Get('by-id/:id')
	public async findById(@Param('id') id: string) {
		return this.userService.findById(id)
	}
}
