﻿<%@ Page Title="New Part Number Registration" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="register-new-sku.aspx.vb" Inherits="tools_Default" %>

<asp:Content ID="headContent" ContentPlaceHolderID="specificHeadContent" runat="server">
    <script src="/Scripts/handsontable/handsontable.full.js" type="text/javascript"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
   <script type="text/javascript" src="http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js"></script>
    
    <link href="/Content/handsontable/handsontable.full.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="MainContent" ContentPlaceHolderID="MainContent" runat="Server">
    <div class="jumbotron">
        <h1>New part number registration <span class="alert-danger">(Deprecated)</span></h1>
        <p class="lead">This tool is intended to help the Product Managers make a request to register part numbers that are not in the ERP (Intranet/Starsoft Applications) databases. Please read carefully the instructions below before making a request.</p>
        <%--<p class="lead">Please fill the spreadsheet below with the required information of each part number.</p>--%>
    </div>
    <div class="container">
        <h5>Instructions:</h5>
        <ul>
            <li>Fill every cell of the spreadsheet below with the correspondant data for each part number.</li>
            <li>You can copy & paste information such as SKUs and descriptions from an MS Excel&reg; spreadsheet. More rows will appear to acommodate the rows from the spreadsheet below.</li>
            <li>If you need to add more rows individualy you can do so by right clicking over the spreadsheet.</li>
            <li>Some cells will be grayed out as you fill each field. This is because some data is <strong>not required</strong> for certain types of items or regions.</li>
        </ul>
    </div>

    <form id="form1" runat="server">
        <div id="spreadsheet" style="/*overflow: hidden; width: 100%; min-height: 200px*/"></div>
        <br />
        <%--<asp:LinkButton ID="btnSubmit" runat="server" OnClick="btnSubmit_Click" CssClass="">
            <i class="fa fa-download"></i>&nbsp;Submit
        </asp:LinkButton>--%>
       <div class="">
            <div id="btnSubmit" class="btn btn-primary">
                <div><i class="fa fa-download"></i>&nbsp;Submit</div>
            </div>
        </div>
       <!-- <pre id="exampleConsole"></pre>-->
        <% Response.Write(Now()) %>
    </form>


    <script src="js/spreadsheet.js" type="text/javascript"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
   <script type="text/javascript" src="http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js"></script>
 

</asp:Content>

