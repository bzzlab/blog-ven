import orderRoutes from './api/post/order-routes';
import regRoutes from './api/register/register-routes';
import userRoutes from './api/user/user-routes';
import authRoutes from './api/auth/auth-routes';

//register endpoints
export function registerRoutes(app) {
    app.use('/api',orderRoutes);
    app.use('/api',regRoutes);
    app.use('/api',userRoutes);
    app.use('/api',authRoutes);
}
