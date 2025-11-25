interface Props {
	domain: string
	token: string
}

export function PasswordConfirmTemplate({ domain, token }: Props) {
	const link = `${domain}/auth/new-password?token=${token}`

	return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Сброс пароля</title>
        </head>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <a href="${link}" style="color: #007bff; text-decoration: none; font-size: 16px;">
            Перейти
          </a>
        </body>
      </html>
    `
}
