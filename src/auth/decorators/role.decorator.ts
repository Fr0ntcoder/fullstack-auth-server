import { SetMetadata } from '@nestjs/common'
import { UserRole } from 'generated/prisma'

export const ROLES_KEY = 'roleS'

export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles)
