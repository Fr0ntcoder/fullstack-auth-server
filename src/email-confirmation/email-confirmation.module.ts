import { Module, forwardRef } from '@nestjs/common'

import { AuthModule } from '@/auth/auth.module'
import { MailModule } from '@/mail/mail.module'
import { MailService } from '@/mail/mail.service'
import { UserService } from '@/user/user.service'

import { EmailConfirmationController } from './email-confirmation.controller'
import { EmailConfirmationService } from './email-confirmation.service'

@Module({
	imports: [MailModule, forwardRef(() => AuthModule)],
	controllers: [EmailConfirmationController],
	providers: [EmailConfirmationService, MailService, UserService],
	exports: [EmailConfirmationService]
})
export class EmailConfirmationModule {}
