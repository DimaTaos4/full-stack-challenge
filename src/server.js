import express from 'express';
import cors from 'cors';

import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

import userRouter from './routers/users.router.js';
import zalandoRouter from './routers/zalando.router.js';
import breuningerRouter from './routers/breuninger.router.js';
import analysisRouter from './routers/analysis.router.js';
import retailersRouter from './routers/retailers.router.js';

const startServer = () => {

    const app = express();
    app.use(cors());
    app.use(express.json());
    const PORT = process.env.PORT || 3000;

    app.use("/api/users", userRouter);
    app.use("/api/zalando", zalandoRouter);
    app.use("/api/breuninger", breuningerRouter);
    app.use("/api/analysis", analysisRouter);
    app.use("/api/retailers", retailersRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}
export default startServer;