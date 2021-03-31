<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@page language="java" import="dbUtils.*" %>
<%@page language="java" import="model.webUser.*" %> 
<%@page language="java" import="view.WebUserView" %> 
<%@page language="java" import="com.google.gson.*" %>

<%
    StringData sd = new StringData();
    if (session.getAttribute("loggedOnUser") != null) {
        System.out.println("*** Getting the User Profile");
        StringData loggedOnUser = (StringData) session.getAttribute("loggedOnUser");
        System.out.println("*** User found");
        sd = loggedOnUser;
    } else {
        System.out.println("*** No session object");
        sd.errorMsg = "No user is logged in at this time.";
    }

    Gson gson = new Gson();
    out.print(gson.toJson(sd).trim());
%>