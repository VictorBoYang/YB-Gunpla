/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.webUser;

import dbUtils.DbConn;
import dbUtils.FormatUtils;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author yangbo
 */
public class DbMods {
    public static StringData LogOn(DbConn dbc, String email, String password){
        StringData sd = new StringData();
        if ((email == null) || (password == null)) {
            sd.errorMsg = "Error: Must provide a valid emial or password";
            return sd;
        }
        try {
            String sql = "SELECT web_user_id, user_email, user_password, membership_fee, birthday, image, "
                    + "web_user.user_role_id, user_role_type "
                    + "FROM web_user, user_role WHERE web_user.user_role_id = user_role.user_role_id "
                    + "AND user_email = ? AND user_password = ?";
            
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            
            stmt.setString(1, email);
            stmt.setString(2,password);
            
            ResultSet results = stmt.executeQuery();
            
            if (results.next()) { // id is unique, one or zero records expected in result set

                // plainInteger returns integer converted to string with no commas.
                sd.webUserId = FormatUtils.plainInteger(results.getObject("web_user_id"));
                sd.userEmail = FormatUtils.formatString(results.getObject("user_email"));
                sd.userPassword = FormatUtils.formatString(results.getObject("user_password"));
                sd.image = FormatUtils.formatString(results.getObject("image"));
                sd.birthday = FormatUtils.formatDate(results.getObject("birthday"));
                sd.membershipFee = FormatUtils.formatDollar(results.getObject("membership_fee"));
                sd.userRoleId = FormatUtils.plainInteger(results.getObject("web_user.user_role_id"));
                sd.userRoleType = FormatUtils.formatString(results.getObject("user_role_type"));
                
            } else {
                sd.errorMsg = "Didn't find user. Please Enter corrct email or password";
            }
            results.close();
            stmt.close();
           
    }catch (Exception e) {
            sd.errorMsg = "Exception thrown in DbMods.LogOn: " + e.getMessage();
        }
        return sd;
    }
}
