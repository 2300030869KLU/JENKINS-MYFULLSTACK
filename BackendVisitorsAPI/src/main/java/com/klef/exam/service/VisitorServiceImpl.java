package com.klef.exam.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.exam.model.Visitor;
import com.klef.exam.repository.VisitorRepository;



@Service
public class VisitorServiceImpl implements VisitorService  {
	
	@Autowired
	private VisitorRepository visitorRepository;
	
	@Override
	public String addvisitor(Visitor visitor) {
		visitorRepository.save(visitor);
		return "Visitor Added Successfully";
	}
	
	@Override
	public List<Visitor> viewallvisitors(){
		return visitorRepository.findAll();
	}
	
	@Override
	public String deletevisitor(int vid) 
	{
        Optional<Visitor> visitor = visitorRepository.findById(vid);
	    
	    if (visitor.isPresent()) 
	    {	
	        visitorRepository.deleteById(vid);
	        return "Visitor Deleted Successfully";
	    } 
	    else 
	    {
	        return "Visitor ID Not Found";
	    }
	}
	
	@Override
	public String updateVisitor(Visitor visitor) {
	    Optional<Visitor> existingVisitor = visitorRepository.findById(visitor.getId());
	    if (existingVisitor.isPresent()) {
	        visitorRepository.save(visitor);
	        return "Visitor updated successfully!";
	    } else {
	        return "Visitor not found!";
	    }
	}

	// VisitorServiceImpl.java
	@Override
	public Visitor viewVisitorById(int vid) {
	    return visitorRepository.findById(vid).orElse(null);
	}
}
