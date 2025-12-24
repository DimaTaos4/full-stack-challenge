const errorHandler = (err, req, res, next) => {
    const { status = 500, message = 'Internal Server Error' } = err;
    res.status(status).json({ error: message });
}
export default errorHandler;