<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@page language="java" import="dbUtils.*" %>
<%@page language="java" import="model.webUser.*" %> 
<%@page language="java" import="view.WebUserView" %> 
<%@page language="java" import="com.google.gson.*" %>

<%
    StringData sd = new StringData();
    System.out.println("*** Invalidating the user session.");
    session.invalidate();
    sd.errorMsg = "Current user is now logged out (invalidating user session)";

    Gson gson = new Gson();
    out.print(gson.toJson(sd).trim());
%>