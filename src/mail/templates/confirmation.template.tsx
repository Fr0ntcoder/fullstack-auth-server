interface Props {
	domain: string
	token: string
}

export function ConfirmationTemplate({ domain, token }: Props) {
	const link = `${domain}/auth/new-verification?token=${token}`

	return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Подтверждение почты</title>
        </head>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="color: #333;">Подтверждение почты</h1>
          <p style="color: #666; font-size: 16px;">Подтвердите свой адрес электронной почты!</p>
          <a href="${link}" style="color: #007bff; text-decoration: none; font-size: 16px;">
            Подтвердите почту
          </a>
        </body>
      </html>
    `
}
