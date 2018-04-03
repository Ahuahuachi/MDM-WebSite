<%@ Page Title="Commercial Tools" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="commercial-tools.aspx.vb" Inherits="commercial_tools" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
    <div class="jumbotron">
        <div class="container">
            <h1 class="display-3"><%: Title %></h1>
            <p class="lead">The following are tools intended to be used by members of the Commercial Team. Please select the one you need to use:</p>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h2>New part number registration</h2>
                <p>Use this form to make a request to register a new part number into Intranet2</p>
                <p><a runat="server" class="btn btn-secondary" href="~/tools/new-sku/register-new-sku.aspx">Go <span class="fa fa-arrow-right" /></a></p>
            </div>
        </div>
    </div>
</asp:Content>

