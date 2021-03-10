package view;

// classes imported from java.sql.*
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.gunplaPost.*;

// classes in my project
import dbUtils.*;

public class GunplaPostView {

    public static StringDataList getAllGunplaPost(DbConn dbc) {

        // sdl will be an empty array and DbError with "" 
        StringDataList sdl = new StringDataList(); 
        
        // sd will have all of it's fields initialized to ""
        StringData sd = new StringData();
        
        try {
            String sql = 
                    "select gunpla_post_id,title,gunpla_image,description,publish_date,tag,gunpla_post.web_user_id,\n" +
"user_email,birthday\n" +
"from gunpla_post,web_user\n" +
"where gunpla_post.web_user_id = web_user.web_user_id\n" +
"order by gunpla_post_id;";
                    
            
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();

            while (results.next()) {
                
                sd = new StringData();
                
                // the formatUtils methods do not throw exceptions, but if they find illegal data, they write 
                // a message right in the field that they are trying to format.

                // plainInteger returns integer converted to string with no commas.
//                public String gunplaPostId = "";
//    public String title = "";
//    public String image = "";
//    public String description = "";
//    public String publishDate = "";
//    public String Tag = "";   // Foreign Key
//    public String webUserId= "";
                sd.gunplaPostId = FormatUtils.plainInteger(results.getObject("gunpla_post_id"));
                sd.title = FormatUtils.formatString(results.getObject("title"));
                sd.gunplaImage = FormatUtils.formatString(results.getObject("gunpla_image"));
                sd.gunplaImage = FormatUtils.formatString(results.getObject("gunpla_image"));
                sd.description = FormatUtils.formatString(results.getObject("description"));
                sd.publishDate = FormatUtils.formatDate(results.getObject("publish_date"));
                sd.tag = FormatUtils.formatString(results.getObject("tag"));
                sd.webUserId = FormatUtils.plainInteger(results.getObject("gunpla_post.web_user_id"));
                sd.webUserEmail = FormatUtils.formatString(results.getObject("user_email"));
                sdl.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in GunplaPostView.getAllGunplaPost(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}