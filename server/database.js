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

function addUser(url, userdata){
    DATA.find({roomLink: url}).
    then(result=>{
        result[0].users.push(userdata)
        result[0].save()
        console.log(result)
    })
}

function removeUser(userid){
    DATA.find().
    then(result=>{
        result.forEach(room => {
            (room.users).forEach(element => {
            if(element[0] == userid){
                result[0].users.pop(element)
                console.log(result)
                room.save()
            }
            });
        });
    })
}

function deleteRoom(url){
    DATA.deleteOne({roomLink: url}).
    then(result=>{
        console.log("deleted ", url)
    })
}

module.exports = {addUser, removeUser, deleteRoom}