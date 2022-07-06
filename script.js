document.write("<table>");
for(x=1;x<=25;x++){
    document.write("<tr>");
    document.write("<th>"+ x +"</th>");

    for(i=1;i<=10;i++){
        document.write("<td>"+ x*i +"</td>");

    }
    document.write("</tr>");
}
document.write("</table>");