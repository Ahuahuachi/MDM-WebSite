<%@ Page Language="VB" AutoEventWireup="false" CodeFile="test.aspx.vb" Inherits="test" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server" action="http://google.com" method="post">
        <div>
            <input type="hidden" value="test" />
            <input type="submit" value="Submit" />
        </div>
    </form>
</body>
</html>
