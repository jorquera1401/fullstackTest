
'use strict';

const Employee = require('../models/employee.model');

exports.findAll = function(req,res){
	console.log(res);
	Employee.findAll(function(err,employee){
		console.log('controler')
		if(err){
			res.send(err);
		}
		console.log('res',employee);
		res.send(employee);
	});
};

exports.create  = function(req,res){
	const new_employee = new Employee(req.body);

	if(req.body.constructor === Object && Object.keys(req.body).length===0){
		res.status(400).send({
			error:true,
			message:'Please provided all failed'
		});
	}else{
		Employee.create(new_employee,function(err,employee){
			if(err)
				res.send(err)
			res.json({
				error:false,
				message:"Empleado agregado satisfactoriamente",
				data:employee
			});
		});
	}
};
