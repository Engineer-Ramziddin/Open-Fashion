import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
export const corsConfig = (): CorsOptions => ({
  origin: [
    'https://shop02.ramziddin.com',
    'http://localhost:3000',
    'https://shop02-ui.vercel.app',
    'http://localhost:5000',
  ],
  methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  credentials: true,
});
