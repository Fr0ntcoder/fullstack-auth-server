import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { ConfirmationTemplate } from '@/mail/templates/confirmation.template'
import { PasswordConfirmTemplate } from '@/mail/templates/password-confirm.template'

@Injectable()
export class MailService {
	public constructor(
		private readonly mailerService: MailerService,
		private readonly configService: ConfigService
	) {}
  /* sendPasswordResetEmail(email: string, token: string) {
    throw new Error('Method not implemented.')
  } */
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
}
