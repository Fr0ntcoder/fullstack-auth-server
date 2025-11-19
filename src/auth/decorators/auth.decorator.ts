import { UseGuards, applyDecorators } from '@nestjs/common'
import { UserRole } from 'generated/prisma'

import { AuthGuard } from '../guards/auth.guard'
import { RolesGuard } from '../guards/role.guard'

import { Roles } from './role.decorator'

export function Auth(...roles: UserRole[]) {
	if (roles.length > 0) {
		return applyDecorators(
			Roles(...roles),
			UseGuards(AuthGuard, RolesGuard)
		)
	}

	return applyDecorators(UseGuards(AuthGuard))
}
