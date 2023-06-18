const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/programs", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const contactSchema = {
    roomLink: String,
    users: Array,
    public: Boolean
};
const DATA = mongoose.model("livechatapplication", contactSchema);

function randomCodeGenerator(){
    const result = Math.random().toString(36).substring(2,8);
    return result
}

function onRoomCreate(res, public){
    var link = randomCodeGenerator()
    
    DATA.find({roomLink: link}).
    then(result=>{
        if(Object.keys(result).length == 0){
            var data = new DATA({
                roomLink: link,
                users: [],
                public: public
            })
            data.save()
            res.send("room successfully created... \n room id: " + link)
            console.log(link)
        }
        else{
            onRoomCreate()  
        }
    })
    
}

function joinRandomRoom(res){
    DATA.find().
    then(result=>{
        var len = result.length
        var random_index = between(len)
        if(result[random_index].public){
            var link = result[random_index].roomLink
            res.redirect('/chatroom/' + link)
        }
        else{
            joinRandomRoom(res)
        }
    }) 
}

function between(max){
    return Math.floor(
        Math.random() * (max)
    )
}

module.exports = {onRoomCreate, joinRandomRoom}