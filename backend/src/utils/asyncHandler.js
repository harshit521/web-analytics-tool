const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => {
        console.error("Async error:", err);
        next(err);
      });
    };
  };
  
export { asyncHandler };