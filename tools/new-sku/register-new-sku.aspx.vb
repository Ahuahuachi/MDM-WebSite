Imports System.Collections.Generic
Partial Class tools_Default
    Inherits System.Web.UI.Page

    Dim reader As New System.IO.StreamReader(HttpContext.Current.Request.InputStream)
    Dim requestFromPost As String = reader.ReadToEnd()

    <System.Web.Services.WebMethod()>
    Public Shared Function getData(ByVal datos As Datos) As Datos
        Return datos
    End Function

End Class

Public Class Datos
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
Public Class Vendor
    Private _vendor As String

    Public Property Vendor As String
        Get
            Return _vendor
        End Get
        Set(ByVal value As String)
            _vendor = value
        End Set
    End Property

End Class