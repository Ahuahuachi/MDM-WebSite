
using System;
using System.Web;
using System.Windows.Forms;
using System.Web.UI;
using System.IO;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OfficeOpenXml;
/*using Newtonsoft.Json.Linq.JArray;
using Newtonsoft.Json.JsonConvert;*/
/* DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;*/

namespace testsl.Web
{
    public partial class tools_new_sku_register_new_sku2 : System.Web.UI.Page
    {
       

        /* using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindContext"].ConnectionString))
         using (var cmd = new SqlCommand("SELECT * FROM Products", conn))
         using (var adapter = new SqlDataAdapter(cmd))
         {
             var products = new DataTable();
             adapter.Fill(products);
             return products;
         }
     }*/

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ///
            }
        }

        public void Button1_Click(object sender, EventArgs e)
        {
            // var producto= GetData();
          ///SpreadSheet j = new SpreadSheet();
             ExcelPackage excel = new ExcelPackage();
            var workSheet = excel.Workbook.Worksheets.Add("Lista de Precios");
            var totalCols = 6;
            var totalRows = 6;
            workSheet.Cells[1, 1].Value = "VendorNAme";
            workSheet.Cells[1, 2].Value = "FamilyName";
            workSheet.Cells[1, 3].Value = "FamilyName";
            workSheet.Cells[1, 4].Value = "VendorName";
            workSheet.Cells[1, 5].Value = "FamilyName";
            workSheet.Cells[1, 6].Value = "FamilyName";


            for (var row = 1; row <= totalRows; row++)
            {
                for (var col = 0; col < totalCols; col++)
                {
                    workSheet.Cells[row + 1, col + 1].Value = "Hola";
                }
            }
            using (var memoryStream = new MemoryStream())
            {
                Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                Response.AddHeader("content-disposition", "attachment;  filename=products.xlsx");
                excel.SaveAs(memoryStream);
                memoryStream.WriteTo(Response.OutputStream);
                Response.Flush();
                Response.End();
            }
        }
        [System.Web.Services.WebMethod]
        public void GetData(SpreadSheet mydata)
        {
            ExcelPackage excel = new ExcelPackage();
            var workSheet = excel.Workbook.Worksheets.Add("Lista de Precios");
            var totalCols = 6;
            var totalRows = 6;
            workSheet.Cells[1, 1].Value = mydata.listprice;
            workSheet.Cells[1, 2].Value = "FamilyName";
            workSheet.Cells[1, 3].Value = "FamilyName";
            workSheet.Cells[1, 4].Value = "VendorName";
            workSheet.Cells[1, 5].Value = "FamilyName";
            workSheet.Cells[1, 6].Value = "FamilyName";


            for (var row = 1; row <= totalRows; row++)
            {
                for (var col = 0; col < totalCols; col++)
                {
                    workSheet.Cells[row + 1, col + 1].Value = "Hola";
                }
            }
            using (var memoryStream = new MemoryStream())
            {
                Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                Response.AddHeader("content-disposition", "attachment;  filename=products.xlsx");
                excel.SaveAs(memoryStream);
                memoryStream.WriteTo(Response.OutputStream);
                Response.Flush();
                Response.End();
            }
        }

    }
}


    public class SpreadSheet
    {
     int colnum = 2;
     int fila;

    public List<string> vendorname;
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

        public List<string> familyname;
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


        public List<string> invoicedescription;
        public List<string> InvoiceDescription
        {
            get
            {
                return invoicedescription;
            }
            set
            {
                invoicedescription = value;
            }
        }

        public List<string> listprice;
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
            return cfiscalch;
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
