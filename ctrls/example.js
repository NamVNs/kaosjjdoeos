module.exports = {
    path: '/example',
    method: 'GET',
    limit: {
    windowMs: 1000*60,
    max: 3,
    message: 'Quá nhiều request từ IP này, vui lòng thử lại sau.'
  },
    handler: (req, res, next)=>{
        res.send('example');
    },
}