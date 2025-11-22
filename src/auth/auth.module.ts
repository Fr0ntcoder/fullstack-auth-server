import { Module, forwardRef } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha'

import { ProviderModule } from '@/auth/provider/provider.module'
import { getProvidersConfig } from '@/config/provider.config'
import { getRecaptchaConfig } from '@/config/recaptcha.config'
import { EmailConfirmationModule } from '@/email-confirmation/email-confirmation.module'
import { MailService } from '@/mail/mail.service'
import { TwoFactorAuthService } from '@/two-factor-auth/two-factor-auth.service'
import { UserService } from '@/user/user.service'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
	imports: [
		ProviderModule.registerAsync({
			imports: [ConfigModule],
			useFactory: getProvidersConfig,
			inject: [ConfigService]
		}),
		GoogleRecaptchaModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getRecaptchaConfig,
			inject: [ConfigService]
		}),
		forwardRef(() => EmailConfirmationModule)
	],
	controllers: [AuthController],
	providers: [AuthService, UserService, MailService, TwoFactorAuthService],
	exports: [AuthService]
})
export class AuthModule {}
