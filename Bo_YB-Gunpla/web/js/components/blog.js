function blog() {

var content = ` 
            <h1>
                YB-Gunpla Blog
            </h1>
            <p>
                Regarding YB-Gunpla's database design, the following
                tables are currently planned:

            </p>
            <ul>
                <li>User:For everyone to login to their account</li>
                    <ul>
                        <li>Username:char</li>
                        <li>u_id:int</li>
                        <li>photo:file(png/jpg)</li>
                        <li>gender:int(1/0)</li>
                        <li>...</li>
                    </ul>
                <li>Article:Users' posts</li>
                    <ul>
                        <li>Title:char</li>
                        <li>t_id:int</li>
                        <li>content:text</li>
                        <li>author:User</li>
                        <li>...</li>
                    </ul>
                <li>...</li>
            </ul>

            <p>
                I used Django to make a private blog site last summer. I mainly
                used Bootstrap to build the front-end. At that time, I mainly 
                focused on the back-end development.
            </p>

            <p>
                What I am very happy about in this assignment is that I can 
                build my website again. I can easily find the description of the 
                assignment and the grading standard. This will help me a lot.
                I can easily check whether I meet the minimum requirements.
            </p>
    
            <h3>
                Database Experience
            </h3>
            
            <p>
                For YB-Gunpla’s database design, I think it’s not particularly 
                difficult, because Lab4 gave me good examples (web_user, user_role tables). 
                So I didn’t feel difficult when I was designing the Table gunpla-post.
            </p>
            <p>
                I think the most troublesome thing must be to find the error. 
                Sometimes when one of my errors is wrong, it will cause me to delete 
                a lot of existing data. I made a mistake when I was writing the lab, 
                which caused me to delete the existing table and rebuild it.
            </p>
            <a  target="_blank" href="pics/Database_design.pdf">
                click to see Database design(PDF)
            </a>
    
            <h3>
                Web APIs Blog
            </h3>
    
            <p>
                For this week's homework, the main thing is to import Web APIs into our project, 
                connect to our online database, extract data from our database and display it. 
                Compared with last week's json job, this week's job is to convert reading json into reading online database data.
                
                For this week I think the simple thing is that we can use many of the codes used in the last week's homework. 
                Only need to change the processlist slightly. 
                I think the difficult part is to import my database into the project at the beginning. 
                It is difficult for me who have never been in contact with web APIs, and I need to learn from scratch.
            </p>
    
            <a target="_blank" href="pics/Web_API_error_report.pdf">
                click to see my error document
            </a>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
}

