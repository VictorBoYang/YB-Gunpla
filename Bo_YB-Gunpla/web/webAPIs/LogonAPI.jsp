<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@page language="java" import="dbUtils.*" %>
<%@page language="java" import="model.webUser.*" %> 
<%@page language="java" import="view.WebUserView" %> 
<%@page language="java" import="com.google.gson.*" %>

<%
    StringData sd = new StringData();
    String email = request.getParameter("user_email");
    String password = request.getParameter("user_password");
    
    StringData webUser = new StringData();
    
    if ((email == null) || (password == null)) {
        sd.errorMsg = "Please provide an email and password";
    } else {
        DbConn dbc = new DbConn();
        sd.errorMsg = dbc.getErr(); 
        
        if (sd.errorMsg.length() == 0) { 
            System.out.println("*** Calling DbMods.logon");
            sd = DbMods.LogOn(dbc, email, password);
            webUser = sd;
            System.out.println("*** sd written to session object");
            session.setAttribute("loggedOnUser", webUser);
        }
        
        if (sd.errorMsg == "Web User Not Found.") {
            session.invalidate();
            System.out.println("*** User Session Invalidated");
            sd.errorMsg = "Invalid user credentials, please try again.";
        }
        
        dbc.close(); 
    }
    
    Gson gson = new Gson();
    out.print(gson.toJson(sd).trim());
%>
