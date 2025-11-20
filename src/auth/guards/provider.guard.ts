import {
	CanActivate,
	ExecutionContext,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { Request } from 'express'

import { ProviderService } from '@/auth/provider/provider.service'

@Injectable()
export class AuthProviderGuard implements CanActivate {
	public constructor(private readonly providerService: ProviderService) {}

	public canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest() as Request

		const provider = request.params.provider

		const providerIntsance = this.providerService.findByService(provider)

		if (!providerIntsance) {
			throw new NotFoundException('Провайдер не найден')
		}

		return true
	}
}
