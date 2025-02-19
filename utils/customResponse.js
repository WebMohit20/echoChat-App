
// custome response a common response for all api

const customResponse = (res, status, success, message, data, error) => {
    return res.status(status).json({
        success,
        message,
        data,
        error
    });
}

module.exports = customResponse;