import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { ConfirmationTemplate } from '@/mail/templates/confirmation.template'
import { PasswordConfirmTemplate } from '@/mail/templates/password-confirm.template'
import { TwoFactoryTemplate } from '@/mail/templates/two-factory.template'

@Injectable()
export class MailService {
	public constructor(
		private readonly mailerService: MailerService,
		private readonly configService: ConfigService
	) {}

	public async sendConfiramationEmail(email: string, token: string) {
		const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN')
		const html = ConfirmationTemplate({ token, domain })

		return this.sendMail(email, 'Подтверждение почты', html)
	}

	private sendMail(email: string, subject: string, html: string) {
		return this.mailerService.sendMail({
			to: email,
			subject,
			html
		})
	}

	public async sendPasswordResetEmail(email: string, token: string) {
		const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN')
		const html = PasswordConfirmTemplate({ token, domain })

		return this.sendMail(email, 'Сброс пароля', html)
	}

	public async sendTwoFactoryTokenEmail(email: string, token: string) {
		const html = TwoFactoryTemplate({ token })

		return this.sendMail(email, 'Подтверждение вашей личности!', html)
	}
}
