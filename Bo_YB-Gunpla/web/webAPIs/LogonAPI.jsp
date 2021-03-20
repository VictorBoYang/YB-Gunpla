<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@page language="java" import="dbUtils.*" %>
<%@page language="java" import="model.webUser.*" %> 
<%@page language="java" import="view.WebUserView" %> 
<%@page language="java" import="com.google.gson.*" %>

<%
    StringData sd = new StringData();
    String user_email = request.getParameter("user_email");
    String user_password = request.getParameter("user_password");
    if ((user_email == null)||(user_password == null)) {
        sd.errorMsg = "Cannot search for user: 'user_email' and 'user_password' most be supplied";
    } else {
        DbConn dbc = new DbConn();
        sd.errorMsg = dbc.getErr(); 
        if (sd.errorMsg.length() == 0) { 
            System.out.println("*** Ready to call DbMods.Logon");
            sd = DbMods.LogOn(dbc, user_email, user_password);
        }
//        http://localhost:9090/Bo_YB-Gunpla/webAPIs/LogonAPI.jsp?user_email=user2@gmail.com&user_password=testuser_2
        session.setAttribute("LoggedOnUser", sd);
        dbc.close(); 
    }
    Gson gson = new Gson();
    out.print(gson.toJson(sd).trim());
    
%>
