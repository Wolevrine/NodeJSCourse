const ensureDefaults = (req,res,next) => {
    //ensure defaults from err ,messgaes,user
    if (typeof res.locals.error === 'undefined') {
        res.locals.error = null;
    }

    if (typeof res.locals.messages === 'undefined') {
        res.locals.messages = null;
    }


    if (typeof res.locals.user === 'undefined') {
        res.locals.user = null;
    }
    next();
};

module.exports = ensureDefaults;