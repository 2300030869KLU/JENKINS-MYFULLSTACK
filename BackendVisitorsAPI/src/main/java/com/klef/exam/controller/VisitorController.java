package com.klef.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klef.exam.model.Visitor;
import com.klef.exam.service.VisitorService;



@RestController
@RequestMapping("/visitor")
@CrossOrigin("*")
public class VisitorController {
	
	@Autowired
	private VisitorService visitorService;
	
	@PostMapping("/add")
	public ResponseEntity<String> addvisitor(@RequestBody Visitor visitor){
		
		try {
			String output = visitorService.addvisitor(visitor);
			return ResponseEntity.ok(output);
		}catch(Exception e) {
			return ResponseEntity.status(500).body("Adding Visitor Failed: "+ e.getMessage());
		}
	}
	
	
	@GetMapping("/viewall")
	public ResponseEntity<List<Visitor>> viewallvisitors(){
		
		List<Visitor> products = visitorService.viewallvisitors();
		
		return ResponseEntity.ok(products);
	}
	
	
	@DeleteMapping("/delete")
	  public ResponseEntity<String> deletevisitor(@RequestParam int vid)
	  {
		  try
		   {
			  String output = visitorService.deletevisitor(vid);
			  return ResponseEntity.ok(output);
		   }
		   catch(Exception e)
		   {
			    return ResponseEntity.status(500).body("Failed to Delete Visitor ... !!"); 
		   }
	  }
	
		@PutMapping("/update")
		public ResponseEntity<String> updateVisitor(@RequestBody Visitor visitor) {
		    try {
		        String output = visitorService.updateVisitor(visitor);
		        return ResponseEntity.ok(output);
		    } catch (Exception e) {
		        return ResponseEntity.status(500).body("Failed to Update Visitor ... !!");
		    }
		}
		
		@GetMapping("/viewbyid")
		public ResponseEntity<Visitor> viewVisitorById(@RequestParam int vid) {
		    Visitor visitor = visitorService.viewVisitorById(vid);
		    if (visitor != null) {
		        return ResponseEntity.ok(visitor);
		    } else {
		        return ResponseEntity.notFound().build();
		    }
		}

}
