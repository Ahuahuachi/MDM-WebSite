<%@ Page Title="Home" Language="VB" AutoEventWireup="true" CodeFile="Default.aspx.vb" Inherits="_Default" MasterPageFile="~/MasterPage.master" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div class="jumbotron">
        <div class="container">
            <h1 class="display-3">LATAM Master Data Management website</h1>
            <p class="lead">
                In this site you will find useful tools developed and maintained by the LATAM Master Data Management Team.<br />
                Please select the toolset you need to use, in accordance to your profile:
            </p>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h2>MDM Team Tools</h2>
                <p>Here you will find tools developed for Master Data Management Team members.</p>
                <p><a runat="server" class="btn btn-secondary" href="~/MDM-Tools.aspx">Go <span class="fa fa-arrow-right" /></a></p>
            </div>
            <div class="col-md-4">
                <h2>Commercial Team Tools</h2>
                <p>In this area you will find tools developed for Product Managers or Account Managers.</p>
                <p><a runat="server" class="btn btn-secondary" href="~/commercial-tools.aspx">Go <span class="fa fa-arrow-right" /></a></p>
            </div>
            <div class="col-md-4">
                <h2>Operations Area Tools</h2>
                <p>In this area you will find tools developed for Operations Personnel</p>
                <p><a runat="server" class="btn btn-secondary" href="~/operations-tools.aspx">Go <span class="fa fa-arrow-right" /></a></p>
            </div>
        </div>
    </div>
</asp:Content>
