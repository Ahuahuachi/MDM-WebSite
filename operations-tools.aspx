<%@ Page Title="Operations Tools" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="operations-tools.aspx.vb" Inherits="operations_tools" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
    <div class="jumbotron">
        <div class="container">
            <h1 class="display-3"><%: Title %></h1>
            <p class="lead">The following are tools intended to be used by members of the Operations Team. Please select the one you need to use:</p>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h2>Tool 1</h2>
                <p>Description</p>
                <p><a runat="server" class="btn btn-secondary" href="#">Go <span class="fa fa-arrow-right" /></a></p>
            </div>
        </div>
    </div>
</asp:Content>

