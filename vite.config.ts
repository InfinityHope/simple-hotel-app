import react from '@vitejs/plugin-react'
import path from 'path'

import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/': path.resolve(__dirname, './src'),
			'@/ui': path.resolve(__dirname, './src/components/ui'),
			'@/components': path.resolve(__dirname, './src/components'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@/assets': path.resolve(__dirname, './src/assets'),
			'@/constants': path.resolve(__dirname, './src/constants'),
			'@/utils': path.resolve(__dirname, './src/utils'),
			'@/interfaces': path.resolve(__dirname, './src/interfaces'),
			'@/hooks': path.resolve(__dirname, './src/hooks'),
			'@/providers': path.resolve(__dirname, './src/providers'),
			'@/api': path.resolve(__dirname, './src/api'),
			'@/services': path.resolve(__dirname, './src/services'),
			'@/store': path.resolve(__dirname, './src/store')
		}
	}
})
