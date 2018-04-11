using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using Microsoft.VisualBasic;
using Excel = Microsoft.Office.Interop.Excel;
using System.Dynamic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
//using Newtonsoft.Json.Linq.JArray;
//using Newtonsoft.Json.JsonConvert;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;

public partial class tools_new_sku_register_new_sku2 : System.Web.UI.Page
{
    /*  protected void Page_Load(object sender, EventArgs e)
      {
         // 'tdfyuioklñ';
      }*/

    [System.Web.Services.WebMethod]
    public static SpreadSheet GetData(SpreadSheet mydata)
    {
        return mydata;
    }
}

public class SpreadSheet
{
    private List<string> vendorname;
    public List<string> VendorName
    {
        get
        {
            return vendorname;
        }
        set
        {
            vendorname = value;
        }
    }

    private List<string> familyname;
    public List<string> FamilyName
    {
        get
        {
            return familyname;
        }
        set
        {
            familyname = value;
        }
    }


    private List<string> invoicedescription;
    public List<string> InvoiceDescription
    {
        get
        {
            return invoicedescription;
        }
        set
        {
            invoicedescription  = value;
        }
    }

    private List<string> listprice;
    public List<string> ListPrice
    {
        get
        {
            return listprice;
        }
        set
        {
            listprice = value;
        }
    }

    private List<string> itemtype;
    public List<string> ItemType
    {
        get
        {
            return itemtype;
        }
        set
        {
            itemtype = value;
        }
    }

    private List<string> itemgroup;
    public List<string> ItemGroup
    {
        get
        {
            return itemgroup;
        }
        set
        {
            itemgroup = value;
        }
    }

    private List<string> purchasediscount;
    public List<string> PurchaseDiscount
    {
        get
        {
            return purchasediscount;
        }
        set
        {
            purchasediscount = value;
        }
    }

    private List<string> salesfactor;
    public List<string> SalesFactor
    {
        get
        {
            return salesfactor;
        }
        set
        {
            salesfactor = value;
        }
    }

    private List<string> region;
    public List<string> Region
    {
        get
        {
            return region;
        }
        set
        {
            region = value;
        }
    }

    private List<string> cfiscalar;
    public List<string> CFiscalAR
    {
        get
        {
            return cfiscalar;
        }
        set
        {
            cfiscalar = value;
        }
    }

    private List<string> cfiscalbr;
    public List<string> CFiscalBR
    {
        get
        {
            return cfiscalbr;
        }
        set
        {
            cfiscalbr = value;
        }
    }

    private List<string> cfiscalch;
    public List<string> CFiscalCH
    {
        get
        {
            return cfiscalch ;
        }
        set
        {
            cfiscalch = value;
        }
    }

    private List<string> cfiscalco;
    public List<string> CFiscalCO
    {
        get
        {
            return cfiscalco;
        }
        set
        {
            cfiscalco = value;
        }
    }

    private List<string> origin;
    public List<string> Origin
    {
        get
        {
            return origin;
        }
        set
        {
            origin = value;
        }
    }

    private List<string> eccn;
    public List<string> ECCN
    {
        get
        {
            return eccn;
        }
        set
        {
            eccn = value;
        }
    }

    private List<string> ccats;
    public List<string> CCats
    {
        get
        {
            return ccats
        ;
        }
        set
        {
            ccats = value;
        }
    }
    private List<string> licensedesignation;
    public List<string> LicenseDesignation
    {
        get
        {
            return licensedesignation
        ;
        }
        set
        {
            licensedesignation = value;
        }
    }
}