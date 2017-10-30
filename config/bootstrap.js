module.exports.bootstrap = function(cb) {
  CloudMessageService.init();
  cb();
};
