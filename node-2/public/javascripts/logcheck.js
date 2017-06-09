var check = {};
check.checkLogin = function(req, res, next){
    if (!req.session.user) {
        res.redirect('/login');
    }
     next();
}
check.checkNotLogin =  function(req, res, next) {
  if (req.session.user) {
     res.redirect('back');
  }
  next();
};

module.exports = check;