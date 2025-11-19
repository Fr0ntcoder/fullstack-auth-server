import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppService } from '@/app.service'
import { IS_DEV_ENV } from '@/libs/common/utils/isDev.util'

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true
		})
	],
	controllers: [],
	providers: [AppService]
})
export class AppModule {}
