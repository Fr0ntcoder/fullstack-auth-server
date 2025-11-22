import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { IS_DEV_ENV } from '@/libs/common/utils/isDev.util'
import { TwoFactorAuthModule } from '@/two-factor-auth/two-factor-auth.module'

import { AuthModule } from './auth/auth.module'
import { ProviderModule } from './auth/provider/provider.module'
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module'
import { MailModule } from './mail/mail.module'
import { PasswordRecoveryModule } from './password-recovery/password-recovery.module'
import { PrismaModule } from './prisma/prisma.module'
import { UserModule } from './user/user.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true
		}),
		PrismaModule,
		AuthModule,
		UserModule,
		ProviderModule,
		MailModule,
		EmailConfirmationModule,
		PasswordRecoveryModule,
		TwoFactorAuthModule
	]
})
export class AppModule {}
