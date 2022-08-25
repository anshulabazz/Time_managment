const Users = require('../models/user.model')
const Timesheet = require('../models/timesheet.model')
exports.createtimesheet =async (req, res) => {
    const timesheet = new Timesheet({
        user: req.body.user,
        startdate: req.body.startdate,
        enddate: req.body.enddate
    })
    const createtimesheet = await timesheet.save()
    res.status(200).send(createtimesheet)
}
exports.findbyuser = async (req, res) => {
    const data = await Users.findOne({ firstname: req.body.user })
    
    const result  =Timesheet.find({ user: data.id })
    res.send(result)

}
exports.findbydate = async (req, res) => {
    const startdate = req.body.startdate
    const enddate = req.body.enddate
    
    const result = await Timesheet.find({ startdate: { $gt: startdate }, enddate: {$lt:enddate} }).populate('user')
    if (!result) {
     return res.status(200).send('No data for selected data')
    }

    return res.send(result)


}

exports.getselecteddatedata = async (req, res) => {
    
    var data = await Users.find({})
    var datalenght = data.length
    var list1 = []
    var count = 0

    data.forEach(async users => {
        
       
        var result = await Timesheet.findOne({ user: users.id }).populate('user')
        
        if (result) {
            var file = {
                user: users.firstname,
                startdate: result.startdate,
                enddate: result.enddate
            }
            list1.push(file)

        }

        else {
            var file = {
                user: users.firstname

            }
            list1.push(file)
           
        }
        count=count+1
        if (count === datalenght) {
            return res.send(list1)
        }
        console.log(count)
        console.log(datalenght)
    })
    
   console.log(list1) 
}



