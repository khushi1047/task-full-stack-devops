const task = require("../models/task");


const getTasks = async(req,res) =>{
    try{
        const {search, status, priority, page = 1, limit=5, sortBy ="priority"} = req.query;
 
        const query ={};

        if(search){
            query.title = {$regex :search , $options:"i"};
        }
        if(status){
            query.status = status;
        }

        if(priority){
            query.priority = priority;
        }

        const skip = (page-1)*limit;

        const sort ={};
        if(sortBy){
            sort[sortBy] =1;
        }

        const tasks = await task.find(query)
            .skip(skip)
            .limit(Number(limit))
            .sort(sort)
        
            res.json(tasks);
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}


const createTask = async(req,res)=>{
    try{
        const newtask = await task.create(req.body);
        res.status(201).json(newtask);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }   
}

const updateTask = async(req,res)=>{
    try{
        const updatedtask = await task.findByIdAndUpdate(req.params.id, req.body,{
            new : true
        })

        res.json(task);
    }
    catch(error){
        res.status(500).json({error : err.message})
    }
}

const deleteTask = async(req,res)=>{
    try{
        await task.findByIdAndDelete(req.params.id);
        res.json({message:"Task deleted"});
    }
    catch{
        res.status(500).json({error : err.message});
    }
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}