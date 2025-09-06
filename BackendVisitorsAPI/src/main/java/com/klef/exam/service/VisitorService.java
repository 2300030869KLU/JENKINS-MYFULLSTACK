package com.klef.exam.service;

import java.util.List;

import com.klef.exam.model.Visitor;



public interface VisitorService {
	public String addvisitor(Visitor visitor);
	public List<Visitor> viewallvisitors();
	public String deletevisitor(int vid);
	public String updateVisitor(Visitor visitor);
	public Visitor viewVisitorById(int vid);
}