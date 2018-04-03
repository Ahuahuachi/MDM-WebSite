
Partial Class tools_Default
    Inherits System.Web.UI.Page

    Dim reader As New System.IO.StreamReader(HttpContext.Current.Request.InputStream)
    Dim requestFromPost As String = reader.ReadToEnd()


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