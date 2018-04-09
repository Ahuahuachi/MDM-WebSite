<%@ Page Language="VB" AutoEventWireup="false" CodeFile="VB.aspx.vb" Inherits="VB" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<head id="Head1" runat="server">
    <title></title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js"></script>
    <script type="text/javascript">
        $("#btnCity").live("click", function () {
            var city = {};
            city.Name = "Mumbai";
            city.Population = 2000;
            $.ajax({
                type: 'POST',
                url: 'VB.aspx/GetCity',
                data: "{city:" + JSON.stringify(city) + "}",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (r) {
                    alert(r.d.Name);
                    alert(r.d.Population);
                }
            });
        });
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <input type="button" id = "btnCity" value="Get City" />
    </div>
    </form>
</body>

