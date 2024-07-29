//this moiddlware accepts the layout view as argument
const path = require('path');


const renderWithLayouts = (layout) => {
    //define and return a middleware function
    return (req,res,next) =>{
       res.renderWithLayouts = (view, params = {}) =>{
        params.body = path.join(__dirname,'../views' , view);
        res.render(layout,params)
        

        }
        next();
    }
};

module.exports = renderWithLayouts;