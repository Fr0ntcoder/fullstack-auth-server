interface Props {
	token: string
}

export function TwoFactoryTemplate({ token }: Props) {
	return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Подтверждение почты</title>
        </head>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="color: #333;">Ваш код для аунтетификации:${token}</h1>
          <p>Если вы не запрашивали это код,то просто проигнорируйте это сообщение!</p>
        </body>
      </html>
    `
}
