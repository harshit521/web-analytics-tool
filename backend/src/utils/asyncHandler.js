const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => {
        console.error("Async error:", err); // 👈 log actual error
        next(err);
      });
    };
  };
  
export { asyncHandler };