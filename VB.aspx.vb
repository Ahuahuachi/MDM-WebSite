Imports System.Collections.Generic

Partial Class VB
    Inherits System.Web.UI.Page
    <System.Web.Services.WebMethod()> _
    Public Shared Function GetCity(ByVal city As City) As City
        Return city
    End Function
End Class

Public Class City
    Private _name As String
    Public Property Name As String
        Get
            Return _name
        End Get
        Set(ByVal value As String)
            _name = value
        End Set
    End Property
    Private _population As Integer
    Public Property Population As Integer
        Get
            Return _population
        End Get
        Set(ByVal value As Integer)
            _population = value
        End Set
    End Property
End Class


