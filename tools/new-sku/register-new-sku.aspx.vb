

Partial Class tools_Default
    Inherits System.Web.UI.Page

    'Dim reader As New System.IO.StreamReader(HttpContext.Current.Request.InputStream)
    'Dim requestFromPost As String = reader.ReadToEnd()

    <System.Web.Services.WebMethod()>
    Public Shared Function GetData(ByVal mydata As Spreadsheet) As Spreadsheet
        Return mydata
    End Function
End Class

Public Class Spreadsheet
    Private _vendorname As Collection
    Public Property VendorName As Collection
        Get
            Return _vendorname
        End Get
        Set(ByVal value As Collection)
            _vendorname = value
        End Set
    End Property
    Private _familyname As Collection
    Public Property FamilyName As Collection
        Get
            Return _familyname
        End Get
        Set(ByVal value As Collection)
            _familyname = value
        End Set
    End Property
End Class
