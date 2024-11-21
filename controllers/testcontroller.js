 const testcontroller = (req , res) =>{
    res.status(200).send({
        message : "welcome userc" ,
        success : true ,
    });

};

 

module.exports = { testcontroller };