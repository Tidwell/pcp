// comment item
var Comment = new Schema({
    body  : String, 
    date  : Date,
    author: String
});

// opinion point has point/counterpoint and the associated comments
var Opinion = new Schema({
    point : String,
    counterpoint : String,
    comments: [Comment]
});

var Pcp = new Schema({
    title: String,
    date: Date,
    // for lack of a better name, the array of pcp data
    data: [Opinion]
});
