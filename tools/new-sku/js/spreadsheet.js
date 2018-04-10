document.addEventListener("DOMContentLoaded", function () {

    // Where the spreadsheet should appear
    var container = document.getElementById('spreadsheet'),
        // Vendors list
        vendorList = [
            'Acme Packet',
            'Aerohive',
            'Aladdin',
            'Alien Vault',
            'Arbor Network',
            'Arcsight',
            'Arista',
            'Audiocodes',
            'Avaya',
            'Barracuda',
            'BeyondTrust',
            'BlackBerry',
            'Check Point',
            'Cisco',
            'Cisco BR',
            'Citrix',
            'Converged Access',
            'Crossbeam',
            'Cylance',
            'Eaton Corporation',
            'Exinda',
            'Extreme',
            'F5 Networks',
            'FireEye',
            'Firemon',
            'Forcepoint',
            'Forescout',
            'Fortinet',
            'Gigamon',
            'Google',
            'Hewlett Packard Arcsight',
            'Hewlett Packard Enterprise Company',
            'HP Enterprise Mexico',
            'Huawei-3Com',
            'Imperva',
            'Infoblox',
            'IronPort',
            'Ixia',
            'Jabra',
            'Jaguar',
            'Juniper',
            'Lenovo Comercial',
            'Lifesize',
            'LOGIX Comstor Brasil',
            'LOGIX Comstor International',
            'LOGIX Westcon Brasil',
            'LOGIX Westcon International',
            'Logrhythm',
            'McAfee',
            'Meru Networks',
            'Microsemi',
            'Microsoft',
            'Microsoft Brasil',
            'Microsoft Mexico',
            'ModTap',
            'Motorola',
            'Motorola BR',
            'Netapp',
            'NetGear',
            'Netscout',
            'Nokia',
            'Nortel',
            'OpenDNS',
            'Oracle Argentina',
            'Oracle Brasil',
            'Oracle Colombia',
            'Oracle Chile',
            'Oracle Mexico',
            'Oracle Peru',
            'Palo Alto Networks',
            'Polycom',
            'Proxim / Western Multiplex',
            'Pulse Secure',
            'Pure Storage',
            'Purple',
            'Radware',
            'Riverbed',
            'RSA',
            'Ruckus',
            'Secure Computing',
            'Sonicwall',
            'Sonus',
            'Sourcefire',
            'Symantec Brasil',
            'Symantec Corporation',
            'Trend Micro',
            'Tripwire Inc',
            'Unify',
            'Unify BR',
            'Vasco',
            'Veeam Software',
            'Veritas Technologies',
            'Veritas Technologies Brasil',
            'Viptela',
            'VMWare',
            'VSS Monitoring',
            'WatchGuard',
            'Websense'],

        // Default data set
        data = [
            {
                colVendor: 'Select vendor',
                colFamily: 'Select vendor first',
                sku: '',
                itemDescription: '',
                invoiceDescr: '',
                price: '',
                colType: 'Select type',
                colGroup: 'Select type first',
                colDiscount: 'Select vendor first',
                colSalesFactor: 'Select vendor first',
                colRegion: 'Select region',
                colCFiscalAR: '',
                colCFiscalBR: '',
                colCFiscalCH: '',
                //colCFiscalCO: '', // Disabled for now
                colOrigin: '',
                colECCN: '',
                colCCATS: '',
                colLicDes: 'Select License Designation'
            }],

        // Default spreadsheet settings
        settings = {
            data: data,
            rowHeaders: true,
            colHeaders: ["Vendor", "Family", "SKU", "Description", "Invoice<br>Description", "List Price<br>(USD)", "Type of Item", "Group or Subtype", "Standard Purchase Discount", "Sales Factor", "Regions", "Argentina's<br>Fiscal<br>Classification", "Brazil's<br>Fiscal<br>Classification", "Chile's<br>Fiscal<br>Classification", "Origin<br>(BR Only)", "ECCN", "CCATS", "License<br>Designation"],
            contextMenu: ['row_above', 'row_below', 'remove_row']
        };

    // Handsontable object
    var hot = new Handsontable(container, settings);

    // Get dropdown options for Group based on Type
    function getTypeInfo(colType) {
        var typeInfo = {
            groupProp: {}
        }

        if (colType == 'Hardware') {
            typeInfo.groupProp = { value: 'Not required', source: ['Not required'], readOnly: true }
        } else if (colType == 'Software') {
            typeInfo.groupProp = { value: 'Not required', source: ['Not required'], readOnly: true }
        } else if (colType == 'Service') {
            typeInfo.groupProp = { value: 'Select a group', source: ['Training', 'Installation', 'Support', 'Advice and consulting'], readOnly: false };

        }

        return typeInfo
    }

    function getVendorInfo(colVendor) {
        var vendorInfo = { cellValue: 'Select a Code', codVendor: '', codParteFamilia: '', codParteDesconto: '', codFator: '' };

        switch (colVendor) {
            case 'Acme Packet':
                with (vendorInfo) {
                    codVendor = 'ACMEPKT';
                    codParteFamilia = 'ACMEPKT';
                    codParteDesconto = ['ACME', 'ACME-SVC'];
                    codFator = ['AB-HW', 'AC-SW', 'HP-BR-HW'];
                }
                break;
            case 'Aerohive':
                with (vendorInfo) {
                    codVendor = 'AEROHIVE';
                    codParteFamilia = 'AEROHIVE';
                    codParteDesconto = ['AE-AP', 'AE-PR', 'WG-30', 'WG-70'];
                    codFator = ['AE-AC', 'AE-AP', 'AE-DEMO', 'AE-HW', 'AE-HW1', 'AE-SVC', 'AE-SW'];
                }
                break;
            case 'Aladdin':
                with (vendorInfo) {
                    codVendor = 'ALADDIN';
                    codParteFamilia = 'ALADDIN';
                    codParteDesconto = ['AL-A', 'AL-B', 'AL-C', 'AL-HASP', 'AL-HASP-SW'];
                    codFator = ['HASP-HW', 'HASP-SW', 'J', 'Z'];
                }
                break;
            case 'Alien Vault':
                with (vendorInfo) {
                    codVendor = 'ALIEN VAULT';
                    codParteFamilia = 'ALIEN VAULT';
                    codParteDesconto = ['ALV', 'ALV-HW'];
                    codFator = ['ALV-HW', 'ALV-HW-14', 'ALV-SVC', 'ALV-SW'];
                }
                break;
            case 'Arbor Network':
                with (vendorInfo) {
                    codVendor = 'ARBOR';
                    codParteFamilia = 'ARBOR';
                    codParteDesconto = ['AB-AIF', 'AB-PRD'];
                    codFator = ['AB-HW', 'AB-SVC', 'AB-SW'];
                }
                break;
            case 'Arcsight':
                with (vendorInfo) {
                    codVendor = 'ARCSIGHT';
                    codVendor = 'ARCSIGHT';
                    codParteDesconto = ['AS-HW2', 'AS-SW'];
                    codFator = ['AS-HW', 'AS-SRV', 'AS-SW'];
                }
                break;
            case 'Arista':
                with (vendorInfo) {
                    codVendor = 'ARISTA';
                    codParteDesconto = ['ARI-HW', 'ARI-SRV', 'ARI-SW'];
                    codFator = ['ARI-HW', 'ARI-SRV', 'ARI-SW'];
                }
                break;
            case 'Audiocodes':
                with (vendorInfo) {
                    codVendor = 'AUDIOCODES';
                    codParteDesconto = ['WG-40'];
                    codFator = ['AUDCHW12', 'AUDCHW14', 'AUDCHW16', 'AUDCHW18', 'AUDCHW20', 'AUDCHW8', 'AUDCSRV', 'AUDCSW'];
                }
                break;
            case 'Avaya':
                with (vendorInfo) {
                    codVendor = 'AVAYA';
                    codParteDesconto = ['WG-40'];
                    codFator = ['AUDCHW12', 'AUDCHW14', 'AUDCHW16', 'AUDCHW18', 'AUDCHW20', 'AUDCHW8', 'AUDCSRV', 'AUDCSW'];
                }
                break;
            case 'Barracuda':
                with (vendorInfo) {
                    codVendor = 'BARRACUDA';
                    codParteDesconto = ['BR-1', 'BR-2', 'WG-0', 'WG-10'];
                    codFator = ['BAR-BE', 'BAR-CX', 'BAR-LOSS', 'BAR-SW'];
                }
                break;
            case 'BeyondTrust':
                with (vendorInfo) {
                    codVendor = 'BEYONDTRUST';
                    codParteDesconto = ['BT-HW', 'BT-MNT', 'BT-SVC', 'BT-SW'];
                    codFator = ['BT-HW', 'BT-SVC', 'BT-SW'];
                }
                break;
            case 'BlackBerry':
                with (vendorInfo) {
                    codParteDesconto = ['WG-0'];
                    codFator = ['BB-SVC', 'BB- SW'];
                }
                break;
            case 'Check Point':
                with (vendorInfo) {
                    codParteDesconto = ['CPIII', 'CPND', 'CP-PRODUCT', 'CPS', 'CP-SERVICE', 'CP-SUPPORT', 'CPSVC', 'CPVII'];
                    codFator = ['CP-APP-HW', 'CP-APP-SW', 'CP-HW-16', 'CP-HW-SMB', 'CP-HW-SO', 'CP-NFR', 'CP-SRV', 'CP-SW-SMB', 'CP-SW-SO'];
                }
                break;
            case 'Cisco':
                with (vendorInfo) {
                    codParteDesconto = ['CC-20', 'CC-HW', 'CC-SB', 'CC-SNET', 'CC-SNET2', 'CC-SNET3', 'CC-TB', 'CC-UCS'];
                    codFator = [
                        'CC-1', 'CC-2', 'CC-3', 'CC-4', 'CC-5', 'CC-6', 'CC-7', 'CC-8', 'CC-9', 'CC-10', 'CC-11', 'CC-12',
                        'CC-13', 'CC-14', 'CC-HW-LT', 'CC-HW2-LT', 'CC-SN', 'CC-SN-LT', 'CC-SVC', 'CC-SVC-LT', 'CC-SW', 'CC-SW-LT'
                    ];
                }
                break;
            case 'Cisco BR':
                with (vendorInfo) {
                    codParteDesconto = ['CCBR-32', 'CCBR-HW3', 'CCBR-HW7', 'CCBR-SNT', 'CCBR-SNT2 ', 'CCBR-SNT5'];
                    codFator = ['CCBR-1', 'CCBR-SVC', 'CCBR-SW'];
                }
                break;
            case 'Citrix':
                with (vendorInfo) {
                    codParteDesconto = [
                        'CTX-05', 'CTX-08', 'CTX-10', 'CTX-15', 'CTX-20', 'CTX-23,50', 'CTX-25', 'CTX-28', 'CTX-30',
                        'CTX-30,25', 'CTX-31', 'CTX-32,50', 'CTX-33,25', 'CTX-34,90', 'CTX-35', 'CTX-36,25', 'CTX-37',
                        'CTX-39,55', 'CTX-40', 'CTX-40,50', 'CTX-41,50', 'CTX-43', 'CTX-44,20', 'CTX-44,75', 'CTX-46',
                        'CTX-47,75', 'CTX-48,85', 'CTX-49', 'CTX-50,50', 'CTX-52,50', 'CTX-53,25', 'CTX-55'
                    ];
                    codFator = ['CTX-HW', 'CTX-HW-8', 'CTX-HW-12', 'CTX-HW-16', 'CTX-HW-18', 'CTX-HW-EX', 'CTX-SV', 'CTX-SW'];
                }
                break;
            case 'Converged Access':
                with (vendorInfo) {
                    codParteDesconto = ['CAC-A', 'SIT-001'];
                    codFator = ['CAC-HW', 'CAC-SV', 'CAC-SW'];
                }
                break;
            case 'Crossbeam':
                with (vendorInfo) {
                    codParteDesconto = ['CB-0', 'CB-1', 'CB-2'];
                    codFator = ['CB-HW', 'CB-SW'];
                }
                break;
            case 'Cylance':
                with (vendorInfo) {
                    codParteDesconto = ['WG-20'];
                    codFator = ['CY-SVC', 'CY-SW'];
                }
                break;
            case 'Eaton Corporation':
                with (vendorInfo) {
                    codParteDesconto = [
                        'WG-12_5', 'WG-3_7', 'WG-31', 'WG-32', 'WG-36', 'WG-37', 'WG-38', 'WG-39', 'WG-40', 'WG-41', 'WG-42',
                        'WG-43', 'WG-44', 'WG-45', 'WG-46', 'WG-47', 'WG-48', 'WG-49', 'WG-50', 'WG-51', 'WG-52', 'WG-53',
                        'WG-54', 'WG-55', 'WG-56', 'WG-57', 'WG-58', 'WG-59', 'WG-60', 'WG-61', 'WG-62', 'WG-63', 'WG-64',
                        'WG-65', 'WG-66', 'WG-67', 'WG-70', 'WG-71', 'WG-72', 'WG-73', 'WG-76', 'WG-77', 'WG-79'
                    ];
                    codFator = [
                        'EA-12_5-0', 'EA3_7-0', 'EA31-0', 'EA32-0', 'EA36-0', 'EA37-0', 'EA38-0', 'EA39-0', 'EA40-0', 'EA41-0',
                        'EA42-0', 'EA43-0', 'EA44-0', 'EA45-0', 'EA46-0', 'EA47-0', 'EA48-0', 'EA49-0', 'EA50-0', 'EA51-0',
                        'EA52-0', 'EA53-0', 'EA54-0', 'EA55-0', 'EA56-0', 'EA57-0', 'EA58-0', 'EA59-0', 'EA60-0', 'EA61-0',
                        'EA62-0', 'EA63-0', 'EA64-0', 'EA65-0', 'EA66-0', 'EA67-0', 'EA70-0', 'EA70-0', 'EA71-0', 'EA72-0',
                        'EA73-0', 'EA76-0', 'EA77-0', 'EA79-0', 'EAT-HW'
                    ];
                }
                break;
            case 'Exinda':
                with (vendorInfo) {
                    codParteDesconto = ['EX-HW', 'EX-SW'];
                    codFator = ['EX-HW', 'EX-HW-NIC', 'EX-SW'];
                }
                break;
            case 'Extreme':
                with (vendorInfo) {
                    codParteDesconto = [
                        'EXT', 'EXTHW-ZB', 'EXT-SUP', 'EXT-SUP-HW', 'EXT-SUP-PW-APP', 'EXT-SUP-PW-HW', 'EXT-SUP-PWP-APP',
                        'EXT-SUP-PWP-HW', 'EXT-SUP-PWP-SW', 'EXT-SUP-SW', 'EXTSW-ZB', 'EXT-TR'
                    ];
                    codFator = [
                        'EXT-II-0', 'EXT-II-12', 'EXT-II-14', 'EXT-II-16', 'EXT-II-18', 'EXT-II-2', 'EXT-II-20', 'EXT-II-8',
                        'EXT-SV', 'EXT-SW',
                    ];
                }
                break;
            case 'F5 Networks':
                with (vendorInfo) {
                    codParteDesconto = ['F5-P4D', 'F5-T', 'F5-S', 'F5-10', 'F5-H', 'F5-FEE'];
                    codFator = ['F5-ACC', 'F5-HW', 'F5-HW-12', 'F5-HW-16', 'F5-HW-18', 'F5-HW-2', 'F5-HW-8', 'F5-MNT', 'F5-SRV', 'F5-SW',];
                }
                break;
            case 'FireEye':
                with (vendorInfo) {
                    codParteDesconto = ['FE-PRD', 'FE-SS', 'FE-SW'];
                    codFator = ['FE-HW', 'FE-HW-18', 'FE-HW-8', 'FE-SRV', 'FE-SW',];
                }
                break;
            case 'Firemon':
                with (vendorInfo) {
                    codParteDesconto = ['FRMN-STD'];
                    codFator = ['FRMN-HW', 'FRMN-SVC', 'FRMN-SW'];
                }
                break;
            case 'Forcepoint':
                with (vendorInfo) {
                    codParteDesconto = ['FOR-1', 'FOR-HW', 'FOR-SW '];
                    codFator = ['FOR', 'FP-HW', 'FP-PS', 'FP-SRV'];
                }
                break;
            case 'Forescout':
                with (vendorInfo) {
                    codParteDesconto = ['FSC-HW-VA', 'FSC-SRV', 'FSC-SUP', 'FSC-SW',];
                    codFator = ['FSC-HW', 'FSC-SRV', 'FSC-SUP', 'FSC-SW',];
                }
                break;
            case 'Fortinet':
                with (vendorInfo) {
                    codParteDesconto = ['FT-A', 'FT-A-SW', 'FT-S',];
                    codFator = [
                        'FT-TEMP1', 'FT-TEMP2', 'FTN-BOX', 'FTN-BOX-12', 'FTN-BOX-16', 'FTN-BOX-18', 'FTN-BOX-20', 'FTN-BOX-8',
                        'FTN-SRV', 'FTN-SW2', 'FTN-SW3', 'G'
                    ];
                }
                break;
            case 'Gigamon':
                with (vendorInfo) {
                    codParteDesconto = ['GIG-HW', 'GIG-SRV', 'GIG-SW'];
                    codFator = ['GIG-HW', 'GIG-HW-0', 'GIG-HW-2', 'GIG-SRV', 'GIG-SW'];
                }
                break;
            case 'Google':
                with (vendorInfo) {
                    codParteDesconto = ['GG-A'];
                    codFator = ['GG-1', 'GG-2', 'GG-3', 'GG-4', 'GG-5', 'GG-NFR'];
                }
                break;
            case 'Hewlett Packard Arcsight':
                with (vendorInfo) {
                    codParteDesconto = ['WG-15', 'WG-34'];
                    codFator = ['HP-BR-HW', 'HP-SRV', 'HP-SW'];
                }
                break;
            case 'Hewlett Packard Enterprise Company':
                with (vendorInfo) {
                    codParteDesconto = ['WG-15', 'WG-22', 'WG-34'];
                    codFator = ['HPE-HW', 'HPE-SRV', 'HPE-SW'];
                }
                break;
            case 'HP Enterprise Mexico':
                with (vendorInfo) {
                    codParteDesconto = ['WG-22', 'WG-34'];
                    codFator = ['HPMX-HW-SW', 'HPMX-SUPP'];
                }
                break;
            case 'Huawei-3Com':
                with (vendorInfo) {
                    codParteDesconto = ['HU-A'];
                    codFator = ['H3C-RT'];
                }
                break;
            case 'Imperva':
                with (vendorInfo) {
                    codParteDesconto = ['IMP-HW', 'IMP-PS', 'IMP-SS', 'IMP-SW'];
                    codFator = ['IMP-HW', 'IMP-NFR', 'IMP-SRV', 'IMP-SW'];
                }
                break;
            case 'Infoblox':
                with (vendorInfo) {
                    codParteDesconto = ['INFBX-HW', 'INFBX-MNT', 'INFBX-SW'];
                    codFator = ['IFB-HW-14', 'IFB-HW-16', 'IFB-HW-8', 'INFBX-HW', 'INFBX-MNT', 'INFBX-SW'];
                }
                break;
            case 'IronPort':
                with (vendorInfo) {
                    codParteDesconto = ['IP-A'];
                    codFator = ['IP-HW', 'IP-SW'];
                }
                break;
            case 'Ixia':
                with (vendorInfo) {
                    codParteDesconto = ['WG-0'];
                    codFator = ['IXIA-HW14', 'IXIA-SVC', 'IXIA-SW'];
                }
                break;
            case 'Jabra':
                with (vendorInfo) {
                    codParteDesconto = ['JB-HW', 'JB-HW-1', 'JB-HW-3'];
                    codFator = ['JB-HW'];
                }
                break;
            case 'Jaguar':
                with (vendorInfo) {
                    codParteDesconto = ['JG-HW'];
                    codFator = ['JG-HW'];
                }
                break;
            case 'Juniper':
                with (vendorInfo) {
                    codParteDesconto = ['JP-HW', 'JP-SVC', 'JP-SW'];
                    codFator = ['JP-0', 'JP-1', 'JP-2', 'JP-3', 'JP-4', 'JP-5', 'JP-6', 'JP-7', 'JP-SVC', 'JP-SW'];
                }
                break;
            case 'Lenovo Comercial':
                with (vendorInfo) {
                    codParteDesconto = ['WG-0'];
                    codFator = ['LN-HW', 'LN-SW'];
                }
                break;
            case 'Lifesize':
                with (vendorInfo) {
                    codParteDesconto = ['LS-A', 'LS-C', 'LS-E', 'LS-G', 'LS-J'];
                    codFator = ['LS-SW', 'LS-TP1', 'LS-TP2', 'LS-TP3', 'LS-TPex'];
                }
                break;
            case 'LOGIX Comstor Brasil':
                with (vendorInfo) {
                    codParteDesconto = ['LOGIX'];
                    codFator = ['LCB-HW', 'LCB-SW'];
                }
                break;
            case 'LOGIX Comstor International':
                with (vendorInfo) {
                    codParteDesconto = ['LOGIX'];
                    codFator = ['4', '5', 'LC4', 'LGX-SVC'];
                }
                break;
            case 'LOGIX Westcon Brasil':
                with (vendorInfo) {
                    codParteDesconto = ['LOGIX'];
                    codFator = ['LOGIXBR2'];
                }
                break;
            case 'LOGIX Westcon International':
                with (vendorInfo) {
                    codParteDesconto = ['LOGIX'];
                    codFator = ['1', '4', '5', 'LGX-SVC', 'LOGIX-12', 'LOGIX-14', 'LOGIX-16', 'LOGIX-18', 'LOGIX-20', 'LOGIX-8', 'LOGIX-SW'];
                }
                break;
            case 'Logrhythm':
                with (vendorInfo) {
                    codParteDesconto = ['LOG-HW', 'LOG-SRV', 'LOG-SW'];
                    codFator = ['LOG-HW', 'LOG-SRV', 'LOG-SW'];
                }
                break;
            case 'McAfee':
                with (vendorInfo) {
                    codParteDesconto = ['MFE-HW', 'MFE-SW '];
                    codFator = ['MFE-HW', 'MFE-HW-8', 'MFE-HW-12', 'MFE-HW-18', 'MFE-SRV', 'MFE-SW'];
                }
                break;
            case 'Meru Networks':
                with (vendorInfo) {
                    codParteDesconto = ['ME-A', 'ME-B', 'ME-C', 'ME-F', 'ME-P'];
                    codFator = ['ME-HW1', 'ME-SW1'];
                }
                break;
            case 'Microsemi':
                with (vendorInfo) {
                    codParteDesconto = ['MS-1', 'WG-10', 'WG-12'];
                    codFator = ['MS-HW', 'MS-SVC', 'MS-SW'];
                }
                break;
            case 'Microsoft Brasil':
                with (vendorInfo) {
                    codParteDesconto = ['WG-0'];
                    codFator = ['MS-BR'];
                }
                break;

            case 'Microsoft Mexico':
                with (vendorInfo) {
                    codParteDesconto = ['WG-0'];
                    codFator = ['MSMX-OP', 'MSMX-OPCL1', 'MSMX-OPCL2', 'MSMX-OPCL3', 'MSMX-OPCL4'];
                }
                break;
            case 'ModTap':
                with (vendorInfo) {
                    codParteDesconto = ['MT-001'];
                    codFator = ['O'];
                }
                break;
            case 'Motorola':
                with (vendorInfo) {
                    codParteDesconto = ['CY-0'];
                    codFator = ['MOT-HW', 'MOT-SW'];
                }
                break;
            case 'Motorola BR':
                with (vendorInfo) {
                    codParteDesconto = ['CY-0'];
                    codFator = ['MT-BR'];
                }
                break;
            case 'Netapp':
                with (vendorInfo) {
                    codParteDesconto = ['WG-0'];
                    codFator = ['NP-0', 'NP-02', 'NP-1', 'NP-10', 'NP-2', 'NP-3', 'NP-4', 'NP-5', 'NP-SV', 'NP-SW', 'NT-SVC', 'NT-SW'];
                }
                break;
            case 'NetGear':
                with (vendorInfo) {
                    codParteDesconto = ['NETGEAR', 'NG-001', 'NG-002',];
                    codFator = ['NG', 'NG-SS', 'NG-SW',];
                }
                break;
            case 'Netscout':
                with (vendorInfo) {
                    codParteDesconto = ['WG-0'];
                    codFator = ['NTC-HW', 'NTC-HW-4', 'NTC-HW-12', 'NTC-HW-14', 'NTC-SRV', 'NTC-SW'];
                }
                break;
            case 'Nokia':
                with (vendorInfo) {
                    codParteDesconto = ['NK-Y', 'NOKIA'];
                    codFator = [
                        'B', 'D', 'E', 'F', 'NK-APP', 'NP-SW', 'NK-MM', 'NK-PL', 'NK-TEL', 'NOKIA-HW', 'NOKIA-HW2', 'NOKIA-HW8',
                        'NOKIA-HW12', 'NOKIA-HW16', 'NOKIA-HW18', 'NOKIA-HW20', 'NOKIA-SVC', 'NOKIA-SW'
                    ];
                }
                break;
            case 'Nortel':
                with (vendorInfo) {
                    codParteDesconto = ['VIVID-1P', 'VIVID-2P', 'VIVID-2S', 'VIVID-3P', 'VIVID-4P', 'VIVID-5P', 'VIVID-7P'];
                    codFator = ['3', 'BAY-HW8', 'BAY-HW12', 'BAY-HW16', 'BAY-SW', 'NT-SVC', 'NT-SW', 'Q', 'U', 'X', 'X4', 'X5'];
                }
                break;
            case 'OpenDNS':
                with (vendorInfo) {
                    codParteDesconto = ['WG-30', 'WG-37', 'WG-48', 'WG-53_2'];
                    codFator = ['ODNS'];
                }
                break;
            case 'Oracle Argentina':
                with (vendorInfo) {
                    codParteDesconto = ['WG-0'];
                    codFator = ['OC-AR-HW', 'OC-AR-SVC', 'OC-AR-SW'];
                }
                break;
            case 'Oracle Brasil':
                with (vendorInfo) {
                    codParteDesconto = ['WG-0'];
                    codFator = ['OR-HW', 'OR-SVC', 'OR-SW'];
                }
                break;
            case 'Oracle Colombia':
                with (vendorInfo) {
                    codParteDesconto = ['WG-40'];
                    codFator = ['OO-CO'];
                }
                break;
            case 'Oracle Chile':
                with (vendorInfo) {
                    codParteDesconto = ['WG-0'];
                    codFator = ['CONFIGURED'];
                }
                break;
            case 'Oracle Mexico':
                with (vendorInfo) {
                    codParteDesconto = ['WG-40'];
                    codFator = ['OM-HW', 'OM-SVC', 'OM-SW'];
                }
                break;
            case 'Oracle Peru':
                with (vendorInfo) {
                    codParteDesconto = ['WG-40'];
                    codFator = ['OP-HW', 'OP-SVC', 'OP-SW'];
                }
                break;
            case 'Palo Alto Networks':
                with (vendorInfo) {
                    codParteDesconto = ['PA-A', 'PA-B', 'PA-C', 'PA-D', 'PA-G'];
                    codFator = ['PA-HW', 'PA-HW-C', 'PA-SVC', 'PA-SW', 'PA-SW-C', 'PA-SW-D'];
                }
                break;
            case 'Polycom':
                with (vendorInfo) {
                    codParteDesconto = ['DC2', 'DC3', 'DC4', 'DC6', 'DC8', 'DC10', 'DC12', 'DC14', 'DC16'];
                    codFator = ['PLC-2', 'PLC-8', 'PLC-10', 'PLC-12', 'PLC-14', 'PLC-16', 'PLC-18', 'PLC-20', 'PLC-25', 'PLC-SRV', 'PLC-SW'];
                }
                break;
            case 'Proxim / Western Multiplex':
                with (vendorInfo) {
                    codParteDesconto = ['W0', 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W11'];
                    codFator = ['MOT-HW'];
                }
                break;
            case 'Pulse Secure':
                with (vendorInfo) {
                    codParteDesconto = ['WG-22', 'WG-27'];
                    codFator = ['PS-HW', 'PS-HW-8', 'PS-HW-14', 'PS-HW-16', 'PS-SVC', 'PS-SW'];
                }
                break;
            case 'Pure Storage':
                with (vendorInfo) {
                    codParteDesconto = ['WG-0'];
                    codFator = ['PURE-HW', 'PURE-HW8', 'PURE-HW14', 'PURE-HW16', 'PURE-HW18', 'PURE-SRV', 'PURE-SW'];
                }
                break;
            case 'Purple':
                with (vendorInfo) {
                    codParteDesconto = ['WG-10', 'WG-25'];
                    codFator = ['PP-SW'];
                }
                break;
            case 'Radware':
                with (vendorInfo) {
                    codParteDesconto = ['RAD-CSL', 'RAD-HW', 'RAD-LT'];
                    codFator = ['RAD-BOX', 'RAD-HW', 'RAD-NFR', 'RAD-SV', 'RAD-SW'];
                }
                break;
            case 'Riverbed':
                with (vendorInfo) {
                    codParteDesconto = ['RB-1', 'RB-2'];
                    codFator = ['RB-01', 'RB-2', 'RB-3', 'RB-04', 'RB-8', 'RB-12', 'RB-14', 'RB-18'];
                }
                break;
            case 'RSA':
                with (vendorInfo) {
                    codParteDesconto = ['RS-001', 'RS10', 'RS15', 'RS17', 'RS27', 'RS33', 'RS-90', 'RS-K', 'RS-N'];
                    codFator = [
                        'RS-HW', 'RS-HW-0', 'RS-HW-8', 'RS-HW-12', 'RS-HW-16', 'RS-SW', 'RS-TK', 'RS-TK-HW',
                        'RS-TK-SW', 'RSA-SRV', 'RSA-SVC'
                    ];
                }
                break;
            case 'Ruckus':
                with (vendorInfo) {
                    codParteDesconto = ['RU-A', 'RU-B', 'RU-C', 'RU-D', 'RU-E', 'RU-F', 'RU-G', 'RU-H', 'RU-J'];
                    codFator = ['RU-HW', 'RU-SVC', 'RU-SW'];
                }
                break;
            case 'Secure Computing':
                with (vendorInfo) {
                    codParteDesconto = ['SC-A', 'SC-B', 'SC-C', 'SC-N', 'SC-S'];
                    codFator = ['SC-A', 'SC-B', 'SC-C', 'SC-N', 'SC-S'];
                }
                break;
            case 'Sonicwall':
                with (vendorInfo) {
                    codParteDesconto = ['SNW-40', 'SONICWALL', 'SW-R'];
                    codFator = ['SNW-HW-8', 'SNW-HW-12', 'SNW-HW-14', 'SNW-HW-16', 'SNW-HW-20', 'SNW-SW'];
                }
                break;
            case 'Sonus':
                with (vendorInfo) {
                    codParteDesconto = ['SN-SW', 'WG-20', 'WG-40', 'WG-45'];
                    codFator = ['SN-HW-8', 'SN-HW-12', 'SN-HW-14', 'SN-HW-16', 'SN-HW-18', 'SN-SVC', 'SN-SW'];
                }
                break;
            case 'Sourcefire':
                with (vendorInfo) {
                    codParteDesconto = ['SF'];
                    codFator = ['SF-HW', 'SF-SRV', 'SF-SW'];
                }
                break;
            case 'Symantec Brasil':
                with (vendorInfo) {
                    codParteDesconto = ['WG-10', 'WG-21', 'WG-22', 'WG-23', 'WG-28', 'WG-32', 'WG-40'];
                    codFator = [
                        'SYM-CLD', 'SYM-HW', 'SYM-SRV', 'SYM-SRV-BR', 'SYM-SW', 'SYM-SW-32', 'SYM-SW-34', 'SYM-SW-35', 'SYM-SW-36',
                        'SYM-SW-37', 'SYM-SW-38', 'SYM-SW-39', 'SYM-SW-40', 'SYM-SW-47', 'SYM-SW-64', 'SYM-SW-65'
                    ];
                }
                break;
            case 'Symantec Corporation':
                with (vendorInfo) {
                    codParteDesconto = [
                        'CAT3PSW', 'CATA', 'CATAA', 'CATC', 'CATG', 'CATHW', 'CATM', 'CATN', 'CATO', 'CATOO', 'CATQ', 'CATS',
                        'CATSM', 'CATSS', 'CATSW1', 'CATSW2', 'CATSW5', 'CATT', 'CATV', 'SY-CLOUD-50', 'SY-RENEW-5', 'SY-RENEW-10',
                        'SY-RENEW-14', 'SY-RENEW-15', 'SY-RENEW-17', 'SY-RENEW-19', 'SY-RENEW-20', 'SY-RENEW-21', 'SY-RENEW-22',
                        'SY-RENEW-25', 'SY-RENEW-28', 'SY-RENEW-32', 'SY-RENEW-35', 'SY-RENEW-40', 'SY-RENEW-45'
                    ];
                    codFator = [
                        'CAT3PSW-SW', 'CATA-HW8', 'CATA-HW12', 'CATA-HW14', 'CATA-HW16', 'CATA-HW18', 'CATA-SW', 'CATAA-HW8',
                        'CATAA-HW12', 'CATAA-HW14', 'CATAA-HW18', 'CATAA-SW', 'CATC-SW', 'CATG-HW14', 'CATG-SW', 'CATHW-HW12',
                        'CATHW-HW14', 'CATL-SW', 'CATM-SW', 'CATMSWEP', 'CATN-HW14', 'CATN-SVC', 'CATN-SW', 'CATO-HW14', 'CATO-SW',
                        'CATOO-SW', 'CATQ-HW8', 'CATQ-HW12', 'CATQ-HW14', 'CATQ-HW16', 'CATQ-HW18', 'CATQ-SW', 'CATS-SW', 'CATSM-SW',
                        'CATSMSWEP', 'CATSS-SW', 'CATSSSWEP', 'CATSW1-SW', 'CATSW1SWEP', 'CATSW2-SW', 'CATSW2SWEP', 'CATT-SW', 'CATV-HW12',
                        'CATV-HW14', 'CATV-HW16', 'CATV-HW18', 'CATV-HW8', 'CATV-SW', 'CATZ-HW14', 'CATZ-SVC', 'CATZ-SW', 'SY-CLOUD',
                        'SY-RENEW', 'SY-RENEWEP', 'SY0-5', 'SY10-5', 'SY14-9', 'SY15-10', 'SY17-12', 'SY18-13', 'SY19-14', 'SY20-15',
                        'SY21-16', 'SY22-17', 'SY23-18', 'SY24-19', 'SY25-20', 'SY26-21', 'SY28-23', 'SY29-24', 'SY30-25', 'SY33-28',
                        'SY34-29', 'SY35-30', 'SY36-31', 'SY37-32', 'SY38-33', 'SY45-40', 'SY50-45', 'SY8-3', 'SY9-4', 'SYM-CLD', 'SYM-HW',
                        'SYM-SRV', 'SYM-SW'
                    ];
                }
                break;
            case 'Trend Micro':
                with (vendorInfo) {
                    codParteDesconto = ['TRND', 'TRND-0', 'TRND-1', 'TRND-SV'];
                    codFator = ['TRN-SMB-R', 'TRND', 'TRND-HW', 'TRND-NL', 'TRND-RNW', 'TRND-SMB', 'TRND-SV'];
                }
                break;
            case 'Tripwire Inc':
                with (vendorInfo) {
                    codParteDesconto = ['TRIP-A', 'TRIP-B', 'TRIP-PRSRV'];
                    codFator = ['TRIP-1', 'TRIP-2', 'TRIP-3', 'TRIP-HW'];
                }
                break;
            case 'Unify':
                with (vendorInfo) {
                    codParteDesconto = ['UN-3', 'UN-4', 'UN-5', 'UN-8'];
                    codFator = [
                        'UN-HW', 'UN-HW 0 II', 'UN-HW-8', 'UN-HW-10', 'UN-HW-12', 'UN-HW-14', 'UN-HW-16', 'UN-HW-18', 'UN-HW-20',
                        'UN-SVC', 'UN-SW'
                    ];
                }
                break;
            case 'Unify BR':
                with (vendorInfo) {
                    codParteDesconto = ['UNBR-2', 'UNBR-3', 'UNBR-4', 'UNBR-5', 'UNBR-6', 'UNBR-7', 'UNBR-8', 'UNBR-9', 'UNBR-11', 'UNBR-12'];
                    codFator = ['UNBR-HW', 'UNBR-SVC', 'UNBR-SW'];
                }
                break;
            case 'Vasco':
                with (vendorInfo) {
                    codParteDesconto = ['VS-1', 'VS-2'];
                    codFator = [
                        'L', 'M', 'N', 'V', 'VS-TK-50', 'VS-TK-100', 'VS-TK-150', 'VS-TK-250', 'VS-TK-500', 'VS-TK-750',
                        'VS-TK-1000', 'VS-TK-1500', 'VS-TK-2000', 'VS-TK-2500', 'VS-TK-3500', 'VS-TK-5000'
                    ];
                }
                break;
            case 'Veeam Software':
                with (vendorInfo) {
                    codParteDesconto = ['VE-MT20', 'VE-SW10', 'VE-SW20'];
                    codFator = ['VEE-MT', 'VEE-SUBS', 'VEE-SW', 'VEE-SWAG', 'VEE-TR', 'VEE-VCSP'];
                }
                break;
            case 'Veritas Technologies':
                with (vendorInfo) {
                    codParteDesconto = ['WG-15', 'WG-25', 'WG-30', 'WG-38'];
                    codFator = ['SY0-5', 'SY18-13', 'SY25-20', 'SY26-21', 'SY30-25', 'SY38-33'];
                }
                break;
            case 'Veritas Technologies Brasil':
                with (vendorInfo) {
                    codParteDesconto = ['SYM-SW', 'WG-27_75', 'WG-32', 'WG-40', 'WG-47', 'WG-64', 'WG-65'];
                    codFator = [
                        'SYM-HW', 'SYM-SRV', 'SYM-SW', 'SYM-SW-32', 'SYM-SW-34', 'SYM-SW-35', 'SYM-SW-36', 'SYM-SW-37',
                        'SYM-SW-38', 'SYM-SW-39', 'SYM-SW-40', 'SYM-SW-47', 'SYM-SW-64', 'SYM-SW-65'
                    ];
                }
                break;
            case 'Viptela':
                with (vendorInfo) {
                    codParteDesconto = ['VIP-HW', 'VIP-SW'];
                    codFator = ['VIP-HW', 'VIP-SW'];
                }
                break;
            case 'VMWare':
                with (vendorInfo) {
                    codParteDesconto = ['VMW-10', 'VMW-15', 'VMW-20'];
                    codFator = ['VM-SRV', 'VM-SW', 'VM-SW-0', 'VM-SW-10', 'VM-SW-15'];
                }
                break;
            case 'VSS Monitoring':
                with (vendorInfo) {
                    codParteDesconto = ['VSS-HW', 'VSS-SW'];
                    codFator = ['VSS-HW', 'VSS-SVC', 'VSS-SW'];
                }
                break;
            case 'WatchGuard':
                with (vendorInfo) {
                    codParteDesconto = ['WATCH-CAT-N', 'WATCH-CAT-P', 'WATCH-CAT-S'];
                    codFator = ['WATCHCAT-A', 'WATCHCAT-C', 'WATCHCAT-N', 'WATCHCAT-P', 'WATCHCAT-S', 'WATCHCAT-V'];
                }
                break;
            case 'Websense':
                with (vendorInfo) {
                    codParteDesconto = ['WEBND'];
                    codFator = ['W', 'W-HW', 'W-PS', 'WS-SRV', 'WS-XP'];
                }
                break;
            default:
                with (vendorInfo) {
                    cellValue = 'Invalid vendor'
                    codVendor = '';
                    codParteDesconto = '';
                    codFator = '';
                }
        }

        vendorInfo.codParteFamilia = [vendorInfo.codVendor, 'Westcon Services'];

        return vendorInfo
    }

    // Define dropdown options for CFiscal columns
    function getCFiscalProp(type, region) {
        var cfiscalProp = {
            CFiscalAR: { readOnly: true, value: 'Select type and region', source: ['Select type and region'] },
            CFiscalBR: { readOnly: true, value: 'Select type and region', source: ['Select type and region'] },
            CFiscalCH: { readOnly: true, value: 'Select type and region', source: ['Select type and region'] }
        };

        switch (region) {
            case 'Argentina':

                cfiscalProp.CFiscalAR.readOnly = false;
                cfiscalProp.CFiscalAR.value = 'Select a fiscal code';

                if (type == 'Hardware') {

                    cfiscalProp.CFiscalAR.source = [
                        'AR01 : 8517.62.48.000L (ROUTER, SWITCH LAYER 3 O MÁS)',
                        'AR02 : 8517.62.77.000H (ACCESS POINT)',
                        'AR04 : 8517.62.99.900R (FIREWALL / EQUIPOS DE SEGURIDAD / GATEWAY / GBIC EN SEPARADO)',
                        'AR05 : 8471.50.10.000P (SERVIDOR DE INFORMATICA HASTA 12500 USD LA UNIDAD - EJEMPLO CISCO)',
                        'AR06 : 8417.62.99.900R (SERVIDORES DE SEGURIDAD DE DATOS)',
                        'AR07 : 85.23.59.90.000U (HD SAS E SATA)',
                        'AR09 : 8504.40.90.990Z (FUENTE DE ALIMENTACION - CONVERSOR DE CORRENTE CONTÍNUA)',
                        'AR11 : 8517.18.99.000U (TELEFONOS)',
                        'AR12 : 8517.62.41.000L (ROUTER INALAMBRICO)',
                        'AR13 : 8517.62.31.000Y (SWITCH LAYER 2)',
                        'AR14 : 8471.50.20.000Z (SERVIDOR DE INFORMATICA DE 12.500 USD HASTA 46.000 USD - EJEMPLO CISCO)',
                        'AR15 : 8471.50.30.000J (SERVIDOR DE INFORMATICA DE 46.000 USD A 100.000 USD - EJEMPLO CISCO)',
                        'AR16 : 8471.50.40.000U (SERVIDOR DE INFORMATICA MS DE 100.000 USD - EJEMPLO CISCO)',
                        'AR17 : 8471.70.19.900K (STORAGE DE DISCOS MECÁNICOS)',
                        'AR18 : 8471.70.12.900G (DISCOS MECANICOS)',
                        'AR19 : 8517.62.59.000D (PLACA DE CIRCUITO IMPRESSO)',
                        'AR20 : 8473.30.42.000T (MEMÓRIA RAM)',
                        'AR21 : 8523.51.90.100A (MEMORIA FLASH)',
                        'AR22 : 8523.59.90.000U (HD SAS E SATA - DISCO RÍGIDO SOLIDO)',
                        'AR23 : 8473.30.99.100A (RACK NETAPP / PARTES DE INFORMÁTICA)',
                        'AR24 : 8504.40.90.910Y (FUENTES RACKEABLES)',
                        'AR25 : 8517.70.91.000X (RACK, BASTIDORES, GABINETES)',
                        'AR27 : 8544.42.00.900N (CABLES SOLOS (POWER) / CABLES ETHERNET SOLOS)',
                        'AR28 : 8525.80.12.000P (VIDEO CAMARAS)',
                        'AR29 : 8525.80.19.900B (VIDEO CAMARAS)',
                        'T-INDEFINIDO : INDEFINIDO'
                    ];

                    cfiscalProp.CFiscalBR = { readOnly: true, value: 'Not required', source: ['Not required'] };
                    cfiscalProp.CFiscalCH = { readOnly: true, value: 'Not required', source: ['Not required'] };

                } else if (type == 'Service' || type == 'Software') {
                    cfiscalProp.CFiscalAR.source = [
                        'I-A : ACCEPTA RETENCIÓN',
                        'I-INDEFINIDO : INDEFINIDO',
                        'I-NA-C : NO ACCEPTA RETENCION COM CONVENIO 11,11%',
                        'I-NA-SC : NO ACCEPTA RETENCION SIN CONVENIO 45,99%'
                    ];
                    cfiscalProp.CFiscalBR = { readOnly: true, value: 'Not required', source: ['Not required'] };
                    cfiscalProp.CFiscalCH = { readOnly: true, value: 'Not required', source: ['Not required'] };
                } else {
                    cfiscalProp.CFiscalAR = { readOnly: false, value: 'Selct type and region', source: [''] };
                    cfiscalProp.CFiscalBR = { readOnly: true, value: 'Not required', source: ['Not required'] };
                    cfiscalProp.CFiscalCH = { readOnly: true, value: 'Not required', source: ['Not required'] };
                }

                break;
            case 'Brazil':

                cfiscalProp.CFiscalBR.readOnly = false;
                cfiscalProp.CFiscalBR.value = 'Select a fiscal code';

                if (type == 'Hardware') {
                    cfiscalProp.CFiscalBR.source = [
                        '011 : 8518.22.00',
                        '012 : 8473.30.11 - IMPORTAÇÃO DIRETA',
                        '0121 : 8473.30.11 - NACIONAL - ORIGEM SP',
                        '0122 : 8473.30.11 - IMPORTADO AD MERC INTERNO',
                        '012S : 8473.30.11 - IMPORTADO SUBSTITUIDO - SP',
                        '013 : 8528.59.20',
                        '014 : 8414.59.90 - IMPORTAÇÃO DIRETA',
                        '0141 : 8414.59.90 - IMPORTADO AD MERC INTERNO',
                        '014S : 8414.59.00 - IMPORTADO SUBSTITUIDO',
                        '015 : 8571.90.12 = USAR A 015 PARA CF 8471.90.12',
                        '015A : 8471.90.12',
                        '016 : 8536.90.90',
                        '016S : 8536.90.90 - IMPORTADO SUBSTITUIDO - SP',
                        '020 : 8518.10.00',
                        '023 : 8517.62.94',
                        '024 : 3926.90.90 - OUTRAS',
                        '025 : 4901.10.00 - LIVROS EM FOLHAS SOLTAS MESMO DOBRADA',
                        '026 : 8506.90.00',
                        '027 : 8528.49.29',
                        '028 : 8507.80.00',
                        '029 : 8517.62.23 - CENTRAIS AUTOMATICAS PRIVADAS',
                        '030 : 8517.62.13 OUTROS MULTIPLEXADORES POR DIVISÃO DE O',
                        '031 : 8518.30.00',
                        '031N : 8518.30.00 - NACIONAL - ORIGEM SP',
                        '031S : 8518.30.00 - IMPORTADO SUBSTITUIDO - SP',
                        '032 : 8517.90.90',
                        '033 : 8523.40.29',
                        '033A : 8517.62.55',
                        '034 : 8523.40.22',
                        '034A : 8523.41.10 -DISCOS PARA SISTEMA DE LEITURA POR RAIOS LASER COM POSSIBILIDADE DE SEREM GRAVADOS UMA ÚNICA VEZ',
                        '034B : 8523.41.10 - IMPORTADO AD MERC INTERNO',
                        '035 : 8544.41.00',
                        '050 : 8517.62.59 EX001 - QUALQUER PRODUTO CLASSIFICADO NO CÓDIGO NCM 8517.62.59',
                        '0501 : 8517.62.59 - EXCLUSIVO PARA MG',
                        '050A : 8517.62.59 EX001 - IMPORTADO AD MERC INTERNO',
                        '051 : 8523.29.11',
                        '052 : 8517.62.59 - APARELHOS PARA TRANSMISSÃO OU RECEPÇÃ',
                        '098 : 8471.50.40 - VALOR FOB SUPERIOR A US$ 100.000,00, POR UNIDADE.',
                        '098A : 8471.50.40 - IMPORTADO AD MERC INTERNO',
                        '098N : 8471.50.40 - NACIONAL - ORIGEM SP',
                        '099 : 8471.50.30 - VALOR FOB SUPERIOR A US$ 46.000,00, MAS NÃO SUPERIOR A US$ 100.000,00, POR UNIDADE',
                        '099A : 8471.50.30 - (S/ST) IMPORTADO AD MERCADO INTERNO',
                        '099N : 8471.50.30 - NACIONAL - ORIGEM SP',
                        '100 : 8471.50.20 - VALOR FOB SUPERIOR A US$ 12.500,00, MAS NÃO SUPERIOR A US$ 46.000,00,',
                        '100A : 8471.50.20 - (S/ST) IMPORTADO AD MERCADO INTERNO',
                        '100N : 8471.50.20 - NACIONAL - ORIGEM SP',
                        '101 : 8506.50.10',
                        '101N : 8517.62.59 - NACIONAL - ORIGEM SP',
                        '102 : 8517.62.41',
                        '1021 : 8517.62.41EX001 - ROTEADORES DE ESTRUTURA ROBUSTA',
                        '1022 : 8517.62.41 - NACIONAL - ORIGEM SP',
                        '103 : 8517.62.77 - IMPORTAÇÃO DIRETA',
                        '1031 : 8517.62.77 - NACIONAL - ORIGEM SP',
                        '1033 : 8517.62.49 - NACIONAL - ORIGEM SP - OUTROS ROTEADORES DIGITAIS',
                        '103A : 8517.62.77 - IMPORTADO AD MERC INTERNO',
                        '103S : 8517.62.77 - IMPORTADO SUBSTITUIDO - SP',
                        '104 : 8517.70.29',
                        '105 : 8523.51.00',
                        '106 : 8544.20.00',
                        '107 : 8544.70.10 - CABOS DE FIBRAS ÓPTICAS COM REVESTIMENTO EXTERNO DE MATERIAL DIELÉTRICO',
                        '1071 : 8544.70.10 - IMPORTADO SUBSTITUIDO - SP',
                        '107A : 8544.70.10 - IMPORTADO AD MERC INTERNO - ES',
                        '108 : 8517.62.49 EX002 - ***** VENCIDO ***** RECLASSIFICAR *****',
                        '109 : 8517.62.59EX016 - ***** VENCIDO ***** RECLASSIFICAR *****',
                        '1091 : 8517.62.59EX015 - ***** VENCIDO ***** RECLASSIFICAR *****',
                        '1092 : 8517.62.59EX018 - TERMINAIS DE VIDEOCONFERENCIA',
                        '1093 : 8517.62.59EX011 - ***** VENCIDO ***** RECLASSIFICAR *****',
                        '1094 : 8517.62.59EX009 - EQUIPAMENTOS DE LIMPEZA DE ATAQUES DDOS',
                        '1095 : 8517.62.59EX010 - ***** VENCIDO ***** RECLASSIFICAR *****',
                        '1096 : 8517.62.59EX027 - MÓDULOS ELETRÔNICOS PARA CONVERTER SINAIS ELÉTRICOS EM ÓPTICOS E VICE-VERSA',
                        '1097 : 8517.62.59EX028 - ***** VENCIDO ***** RECLASSIFICAR *****',
                        '1098 : 8517.62.59EX029 - MÓDULOS ELETRÔNICOS INTERCAMBIÁVEIS',
                        '1099 : 8517.62.59EX025 - EQUIPAMENTOS PARA OTIMIZAÇÃO DE TRÁFEGO DE DADOS POR MEIO DO PROTOCOLO TCP',
                        '10A : 8517.62.72',
                        '110 : 4819.10.00 - CAIXAS DE PAPEL OU CARTÃO, ONDULADS',
                        '111 : 8523.51.90 - EX',
                        '112 : 4811.41.90 - OUTROS -- AUTO-ADESIVOS',
                        '113 : 4901.10.00 - EX - TÉCNICOS, CIENTÍFICOS, DIDÁTICOS',
                        '114 : 3923.90.00 - OUTROS ARTIGOS DE TRANSPORTE OU DE EM',
                        '115 : 5501.90.00 - OUTROS CABOS DE FILAMENTOS SINTÉTICOS',
                        '116 : 4821.10.00 - ETIQUETAS IMPRESSAS',
                        '117 : 8517.62.22 - CENTRAIS AUTOMÁTICAS PRIVADAS,',
                        '118 : 8518.90.90',
                        '118S : 8518.90.90 - IMPORTADO SUBSTITUIDO - SP',
                        '119 : 3923.10.90 - OUTROS - CAIXAS, CAIXOTES, ENGRADADOS',
                        '1199 : 8517.62.59EX019 - ***** VENCIDO ***** RECLASSIFICAR *****',
                        '120 : 4819.50.00 - OUTRAS EMBALAGENS, INCLUINDO AS CAPASS',
                        '1200 : 8517.62.59 - IMPORTADO SUBSTITUIDO - SP',
                        '1201 : 8517.62.59EX039 - IMPORTAÇÃO DIRETA',
                        '1202 : 8517.62.59EX040 - IMPORTAÇÃO DIRETA',
                        '1203 : 8517.62.59EX041 - IMPORTAÇÃO DIRETA',
                        '1204 : 8517.62.59EX042 - IMPORTAÇÃO DIRETA',
                        '1205 : 8517.62.59EX043 - IMPORTAÇÃO DIRETA',
                        '1206 : 8517.62.59EX037 - IMPORTAÇÃO DIRETA',
                        '121 : 8517.12.11 - TEL. PORTATIL P/REDE S/FIO EXCETO CEL',
                        '122 : 7326.90.90 - 5% IPI',
                        '123 : 8504.50.00 IPI 0%',
                        '125 : 7005.29.00 - OUTS.VIDROS Ñ CIT.ANTERIORMENTE',
                        '126 : 7011.10.90 - OUTS.AMPOL,INVL,Ñ CITADOS ANTERIORMENTE',
                        '129 : TELEONES PARA REDE - FIXOS, SEM FONTE PRÓPRIA DE ENERGIA, MONOCANAIS',
                        '700 : 7610.90.90 - OUTRAS CONSTRUÇÕES E SUAS PARTES',
                        '701 : 9405.99.00 - OUTROS APARELHOS DE ILUMINAÇÃO',
                        '702 : 8541.50.20 - OUTROS DISPOSITIVOS SEMICONDUTORES',
                        '703 : 9010.60.00 - TELAS PARA PROJEÇÃO',
                        '8419 : 8419.50.90 -OUTROS TROCADORES (PERMUTADORES*) DE CALOR',
                        '841A : 8419.50.90 - IMPORTADO AD MERC INTERNO',
                        '8443 : 8443.32.33 - IMPRESSORA LASER LED,LCS,MON.C/LARG.',
                        '8471 : 8471.90.14 - DIGITALIZADORES DE IMAGENS (SCANNERS)',
                        '850 : 8507.10.90 - BAT.AUTOM.SELADA 100AH',
                        '8528 : 8528.72.00 - OUTROS APAR.REC.D/TELEV. EM CORES',
                        '8531 : 8531.20.00 - IMPORTAÇÃO DIRETA',
                        '853A : 8531.20.00 - IMPORTADO AD MERC INTERNO',
                        '853S : 8531.20.00 - IMPORTADO SUBSTITUIDO - SP',
                        '85A : 8507.20.90 - 15% IPI',
                        '85B : 8507.20.10 - 15% IPI',
                        '85C : 8507.90.90 - 15% IPI',
                        '85D : 8504.90.40 - 10% IPI',
                        '85N : 8507.20.10 - NACIONAL - ORIGEM SP',
                        '99999 : DIVERSOS',
                        'A : 8471.30.00',
                        'A19 : 8471.80.00 - (S/ST) IMPORTAÇÃO DIRETA',
                        'A19A : 8471.80.00 - (S/ST) IMPORTADO AD MERC INTERNO',
                        'A20 : 8523.52.00',
                        'A21 : 85235990',
                        'A30 : 8523.80.00 - OUTRAS DISP DE ARMAZENAMENTO',
                        'A90 : 8471.30.90',
                        'A99 : 8502.131',
                        'AI : 8471.30.12',
                        'AI2 : 8471.30.12 - NACIONAL -ORIGEM SP - MÁQ.DIG.PROC.DADOS,PORTÁTIL',
                        'B : 8473.30.99 - OUTROS',
                        'B01 : 8443.32.40 - IMPRESSORA ALIMENTADA - OUTRAS',
                        'B011 : 8473.30.99 - NACIONAL - ORIGEM SP',
                        'B012 : 8473.30.99 - IMPORTADO SUBSTITUIDO',
                        'B013 : 8473.30.99 - IMPORTADO AD MERC INTERNO',
                        'B20 : 8507.30.19 - OUTROS ACUMULADORES ELETRICOS',
                        'C : 8517.62.49',
                        'C01 : 8517.62.79 - OUTROS APARELHOS TELEFONICOS',
                        'C02 : 8517.69.00 - OUTROS APARELHOS TELEFONICOS',
                        'C021 : 8517.69.00 - IMPORTADO SUBSTITUIDO - SP',
                        'C03 : 8517.62.51 - TERMINAIS REPETIDORES SOBRE LINHAS ME',
                        'C90 : 8517.62.20',
                        'CADE : 9401.71.00 CADEIRA',
                        'D : 8544.42.00 - OUTROS FIOS - MUNIDOS DE PEÇAS DE CONEXÃO',
                        'D05 : 8544.49.00',
                        'D05S : 8544.49.00 - IMPORTADO SUBSTITUIDO - SP',
                        'D0I : 8544.42.00 - IMPORTADO AD MERC INTERNO',
                        'D0N : 8544.42.00 - NACIONAL - ORIGEM SP',
                        'D0S : 8544.42.00 - IMPORTADO SUBSTITUIDO - SP',
                        'DA : 8544.40.00',
                        'E : 8517.70.99 - IMPORTAÇÃO DIRETA',
                        'E01 : 8517.12.31',
                        'E0E : 8517.70.10 - IMPORTAÇÃO DIRETA',
                        'E0E1 : 8517.70.10 - NACIONAL - ORIGEM SP',
                        'E0E2 : 8517.70.10EX008 - CIRCUITOS IMPR.C/COMP.ELÉTR./ELETR.MONTADOS',
                        'E0E3 : 8517.70.10EX009 - CIRCUITOS IMPR.C/COMP.ELÉTR./ELETR.MONTADOS',
                        'E0E4 : 8517.70.10 - IMPORTADO SUBSTITUIDO - SP',
                        'E0EI : 8517.70.10 - IMPORTADO AD MERC INTERNO',
                        'E0I : 8517.70.99 - IMPORTADO AD MERC INTERNO',
                        'E0N : 8517.70.99 - NACIONAL - ORIGEM SP',
                        'E0S : 8517.70.99 - IMPORTADO SUBSTITUIDO - SP',
                        'E23 : 8523.49.90',
                        'E39 : 8517.12.39',
                        'E40 : 8517.61.30',
                        'E41 : 8517.61.19 OUTROS SIST BIDIRECIONAL RADIOMENSAGEM',
                        'E62 : 8517.62.62',
                        'EA : 8517.12.19 - TEL - APARELHOS ELÉTRICOS PARA TELEF',
                        'EA0 : 8517.18.91',
                        'EA1 : 8517.18.99',
                        'EE0 : 8525.80.29',
                        'EE05 : 8542.31.90 -NACIONAL - ORIGEM SP - OUTROS CIRCUITOS INTEGRADOS',
                        'EE0I : 8542.31.90 - IMPORTADO AD MERC INTERNO - (S/ST)',
                        'EE20 : 8542.31.20 - C.I. MONTADOS, PRÓPRIOS PARA MONTAGEM EM SUPERFÍCIE (SMD - SURFACE MOUNTED DEVICE)',
                        'EE2I : 8542.31.20 - IMPORTADO AD MERC INTERNO',
                        'EE32 : 8542.32.29 - OUTROS CI',
                        'EE33 : 8542.32.91 - (S/ST) - IMPORTAÇÃO DIRETA',
                        'EE3I : 8542.32.91 - (S/ST) IMPORTADO AD MERC INTERNO',
                        'EE5 : 8542.31.90 - (S/ST) OUTROS',
                        'F : 8205.59.00 - OUTRAS',
                        'F00I : 8205.59.00 - IMPORTADO AD MERC INTERNO',
                        'F0IS : 8205.59.00 - IMPORTADO SUBSTITUIDO',
                        'G : 8473.30.49 - IMPORTAÇÃO DIRETA',
                        'G0 : 8473.30.42 - IMPORTAÇÃO DIRETA',
                        'G00 : 8473.30.43 - IMPORTAÇÃO DIRETA',
                        'G001 : 8473.30.42 - NACIONAL - ORIGEM SP - PLACAS(MOD)D/MEMÓRIA C/SUPERFÍCIE-',
                        'G002 : 8473.30.42 - IMPORTADO SUBSTITUIDO',
                        'G009 : 8473.30.42 - IMPORTADO AD MERC INTERNO',
                        'G00I : 8473.30.43 - IMPORTADO AD MERC INTERNO',
                        'G00IS : 8473.30.43S - IMPORTADO SUBSTITUIDO',
                        'G00N : 8473.30.43 - NACIONAL - ORIGEM SP- PLACAS D/MICROPR',
                        'G01 : 8473.30.19 - IMPORTAÇÃO DIRETA',
                        'G011 : 8473.30.19 - IMPORTADO SUBSTITUIDO',
                        'G015 : 8473.30.39 - IMPORTADO SUBSTITUIDO',
                        'G01I : 8473.30.19 - IMPORTADO AD MERC INTERNO',
                        'G02 : 8473.30.19 - NACIONAL - ORIGEM SP',
                        'G03 : 8537.10.90 - NACIONAL - ORIGEM SP',
                        'G031 : 8537.10.90 - OUTROS QUADROS, PAINÉIS, CONSOLES',
                        'G03I : 8537.10.90 - IMPORTADO AD MERC INTERNO',
                        'G06 : 8517.70.91 - GABINETES, BASTIDORES E ARMAÇÕES',
                        'G061 : 8517.70.91 - IMPORTADO SUBSTITUIDO - SP',
                        'G06I : 8517.70.91 - IMPORTADO AD MERC INTERNO',
                        'G39 : 8473.30.39 - IMPORTAÇÃO DIRETA',
                        'G39I : 8473.30.39 - IMPORTADO AD MERC INTERNO',
                        'G5 : 8473.30.50',
                        'G50 : 8473.30.49 - NACIONAL - ORIGEM SP',
                        'G50I : 8473.30.49 - IMPORTADO AD MERC INTERNO',
                        'G51 : 8473.30.49 - IMPORTADO SUBSTITUIDO',
                        'H : 8502.40.90-CONVERSORES ROTATIVOS - OUTROS',
                        'H012 : 8504.40.90 - NACIONAL - ORIGEM SP - OUTS.CONVERSORES ELÉTRICOS',
                        'H04 : 8504.40.10-CONVERSOR ESTATICO - CARREGADORES DE AC',
                        'H05 : 8504.40.29 - CONVERSORES ESTÁTICOS OUTROS',
                        'H06 : 8504.40.21 - CONVERSORES ESTÁTICOS DE CRISTAL (SE)',
                        'H10 : 8504.40.40 - IMPORTAÇÃO DIRETA',
                        'H10I : 8504.40.40 - IMPORTADO AD MERC INTERNO',
                        'H10S : 8504.40.40 - IMPORTADO SUBSTITUIDO - SP',
                        'H11 : 8504.90.90 - SUPORTES P/ FONTE DE ALIMEN. TRANSF',
                        'H12 : 8504.40.90 - IMPORTAÇÃO DIRETA',
                        'H12I : 8504.40.90 - IMPORTADO AD MERC INTERNO',
                        'H13 : 8487.90.00 - EXTRATOR DE MODULOS',
                        'H14 : 8504.40.90 - IMPORTADO SUBSTITUIDO',
                        'H20 : 8507.90.10 - SEPARADORES',
                        'H30 : 8521.90.90',
                        'H31 : 8523.29.00-CD P/REPRODUÇÃO DE FENÔMENOS DIFERENT',
                        'H50 : 8523.29.19-OUTROS SUPORTES P/GRAV. DE SOM OU P/GRA',
                        'H51 : 8523.29.29 - IMPORTAÇÃO DIRETA',
                        'H51I : 8523.29.29 - (S/ST) IMPORTADO AD MERC INTERNO',
                        'H52 : 8523.29.22 - OUTROS DISCOS, FITAS DISPOSITIVOS DE ARMAZENAMENTO DE DADOS',
                        'H52I : 8523.29.22 - IMPORTADO AD MERC INTERNO',
                        'I : 8536.69.90 - TOMADAS DE CORRENTE',
                        'I010 : 3917.22.00 - DE POLÍMEROS DE PROPILENO - IMPORTADO',
                        'I015 : 7412.20.00 - DE LIGAS DE COBRE - IMPORTADO',
                        'I020 : 8481.90.90 - OUTRAS - IMPORTADO',
                        'I025 : 8414.80.19 - OUTROS - IMPORTADO',
                        'I026 : 8536.69.10 - IMPORTAÇÃO DIRETA',
                        'I026S : 8536.69.10 - IMPORTADO SUBSTITUIDO - SP',
                        'I02I : 8536.69.10 - (S/ST) IMPORTADO AD MERCADO INTERNO',
                        'J : 8536.90.40 - CONECTORES PARA CIRCUITO IMPRESSO',
                        'J01 : 8536.90.10',
                        'K : 8544.60.00 - CONDUTORES ELÉTRICOS (>80V E <1000V)',
                        'K70 : 8544.70.90 - CABOS DE FIBRAS ÓPTICAS - OUTROS',
                        'K70N : 8544.70.90 - NACIONAL - ORIGEM SP',
                        'L : 8517.62.48',
                        'L01 : 8517.62.24-CENTRAIS AUTOMAT.COMUT.LINHA TELEF.PRIV',
                        'L05 : 8517.62.29 - OUTRAS CENTRAIS AUTOMATICAS P/ COMUT',
                        'L051 : 8517.62.29 - IMPORTADO SUBSTITUIDO - SP',
                        'L10 : 8517.62.39 - IMPORTAÇÃO DIRETA',
                        'L101 : 8517.62.39 - IMPORTADO SUBSTITUIDO - SP',
                        'L10I : 8517.62.39 - IMPORTADO AD MERC INTERNO',
                        'L11 : 8517.62.39 - NACIONAL - ORIGEM SP',
                        'L12 : 8517.62.39EX002 - EQUIPAMENTOS PARA EXTENSÃO DE IS',
                        'L3922 : 3922.90.00 - PLASTICOS E SUAS OBRAS - BANHEIRAS, BOXES P CHUV,PIAS,LAVAT,BIDÊS,SANIT,CX DESC. E ART.SEM P USO SANIT OU HIG, DE PLAST - OUTROS',
                        'L3923 : 3923.90.00 - OUTROS ARTIGOS DESTINADOS A CUIDADOS PESSOAIS',
                        'LNC : 8517.62.48 - NACIONAL - ORIGEM SP',
                        'M : 8528.30.00',
                        'N : 4911.99.00 - LIVRO TECNICO',
                        'N00I : 4911.99.00 - - (S/ST) IMPORTADO AD MERCADO INTERNO',
                        'N01 : 4901.99.00 - OUTROS - LIVRO TECNICO',
                        'N01I : 4901.99.00 - IMPORTADO AD MERC INTERNO',
                        'N02 : 4911.10.10 - FOLHETO TECNICO',
                        'N02I : 4911.10.10 - IMPORTADO AD MERC INTERNO',
                        'N03 : 4911.10.90 - OUTROS FOLHETOS',
                        'N03I : 4911.10.90 - IMPORTADO AD MERC INTERNO',
                        'N04 : 4911.10.99 - (S/ST) IMPORTADO AD MERCADO INTERNO',
                        'N1 : 4821.90.00 - ETIQUETAS DE QUALQUER ESPÉCIE - OUTR',
                        'O : 8471.90.19',
                        'P : 8517.62.19',
                        'P01 : 8529.10.90 - PARTES E PEÇAS ANTENAS OUTROS',
                        'Q : 8524.39.00 - DISCO - OUTROS',
                        'R : 8504.31.11 - TRANSFORMADORES DE CORRENTE',
                        'R19 : 8504.31.19 - OUTROS ACUMULADORES ELÉTRICOS',
                        'S : 8471.30.19',
                        'S004 : 8471.70.12. - NACIONAL - ORIGEM SP - UN DE DISCOS MAGNÉTICOS',
                        'S0041 : 8471.70.12 - IMPORTADO SUBSTITUIDO',
                        'S01 : 8471.50.10 - CPU UNID DE PROCESS DE DADOS DIGATAIS',
                        'S011 : 8471.50.10 - NACIONAL - ORIGEM SP',
                        'S0111 : 8471.50.10 - IMPORTADO SUBSTITUIDO',
                        'S01I : 8471.50.10 - IMPORTADO AD MERC INTERNO',
                        'S02 : 8471.70.39 - UNIDADES DE FITAS MAGNETICAS',
                        'S03 : 8471.60.52 - TECLADOS UNIDADES DE ENTRADA',
                        'S04 : 8471.70.12 - IMPORTAÇÃO DIRETA',
                        'S04I : 8471.70.12 - IMPORTADO AD MERC INTERNO',
                        'S05 : 8528.51.20',
                        'S09 : 8471.70.19 - IMPORTAÇÃO DIRETA',
                        'S090 : 8471.70.19 - IMPORTADO SUBSTITUIDO',
                        'S09I : 8471.70.19 - IMPORTADO AD MERC INTERNO',
                        'S1111 : 8471.50.10 - NACIONAL - ORIGEM ES',
                        'T : 8517.62.90 - OUTROS AP.,P/TELECOM.P/CORRENTE PORT',
                        'T00 : 8517.62.99 - NACIONAL - ORIGEM SP',
                        'T01 : 8517.62.99 - IMPORTAÇÃO DIRETA',
                        'T011 : 8517.62.99 - IMPORTADO SUBSTITUIDO - SP',
                        'T01I : 8517.62.99 - IMPORTADO AD MERC INTERNO',
                        'T02 : 8519.81.90 - OUTROS APAREL DE GRAVACAO',
                        'T03 : 8519.89.00',
                        'TEMP : TEMPORARIO II 16% E IPI 15%',
                        'U : 8543.90.90',
                        'UC1 : 9031.80.99 OUTROS INSTRUMENTOS, APARELHOS E MÁQUINAS',
                        'UC2 : 2710.19.21 - "GASÓLEO" (ÓLEO DIESEL)',
                        'V : 8544.11.00 - IPI 0%',
                        'X : 8471.90.90',
                        'X004 : 8471.70.29 - NACIONAL - ORIGEM SP',
                        'X01 : 8471.50.90 - IMPORTAÇÃO DIRETA',
                        'X02 : 8471.70.21 - IMPORTAÇÃO DIRETA',
                        'X02I : 8471.70.21 - IMPORTADO AD MERC INTERNO',
                        'X02S : 8471.70.21 - IMPORTADO SUBSTITUIDO - SP',
                        'X03 : 8471.70.29 - IMPORTAÇÃO DIRETA',
                        'X031I : 8471.70.29 - IMPORTADO AD MERC INTERNO',
                        'X03S : 8471.70.29 - IMPORTADO SUBSTITUIDO - SP',
                        'X04 : 8471.70.32 - IMPORTAÇÃO DIRETA',
                        'X040 : 8471.70.32 - IMPORTADO SUBSTITUIDO',
                        'X05 : 8471.70.33 - OUTRAS IMPRES P/CASSETES',
                        'X06 : 8471.70.90 - IMPORTAÇÃO DIRETA',
                        'X060 : 8470.70.90 - IMPORTADO SUBSTITUIDO',
                        'X06I : 8471.70.90 - IMPORTADO AD MERC INTERNO',
                        'Z : 8471.90.13',
                        'Z01 : 9403.20.00',
                        'Z014 : 8528.52.10 - MONOCROMÁTICOS',
                        'Z019 : 8543.70.33 - SINCRONIZADORES DE QUADRO ARMAZENADORES OU CORRETORES DE BASE DE TEMPO 0BIT',
                        'Z01I : 8471.50.90 - (S/ST) IMPORTADO AD MERCADO INTERNO',
                        'Z02 : 8528.69.00',
                        'Z029 : 8528.69.90',
                        'Z03 : 8543.70.99 - OUTRAS MÁQUINAS E APARELHOS',
                        'Z031 : 8543.70.99 - IMPORTADO SUBSTITUIDO - SP',
                        'Z04 : 8517.62.54 - HUB - DISTRIB. DE CONEXÕES PARA REDE)',
                        'Z05 : 8524.99.00',
                        'Z06 : 9002.11.10',
                        'Z07 : 8504.40.30',
                        'Z071 : 8504.40.30 - IMPORTADO SUBSTITUIDO',
                        'Z08 : 8523.51.10 - IMPORTAÇÃO DIRETA',
                        'Z08I : 8523.51.10 - IMPORTADO AD MERC INTERNO',
                        'Z08S : 8523.51.10 - IMPORTADO SUBSTITUIDO - SP',
                        'Z09 : 8526.92.00-20% AP. DE RADIOTELECOMANDO/CTRL REMOTO',
                        'Z1 : 8518.10.90',
                        'Z10 : 8471.60.53 - 15 % - INDICADORES OU APONTADORES (MO',
                        'Z11 : 8471.41.90 - OUTRAS MAQ. AUTOM. DE PROCES.DADOS',
                        'Z111 : 8518.70.90',
                        'Z12 : 8415.82.10 - AP. DE AR COND C/ CAPACIDADE INFERIOR /',
                        'Z13 : 8415.90.00 - PARTES: SENDO UNID EVAPORADORA P/ AP',
                        'Z14 : 8543.90.10 - PARTES DAS MAQ./ AP DA SUBPOSIÇÃO 854',
                        'Z15 : 84735010 - CIRCUITO IMPRESSO C/ COMP ELETR MONTADO',
                        'Z16 : 8528.71.11 - S/ SAIDA DE RF NOS CANAIS 3OU4 - SAI',
                        'Z17 : 8528.71.19-RECEP / DECOD. INTE. (IRD) SINAIS DIG V',
                        'Z18 : 8543.70.13 - AMPLIFICADOR DE RF P/ SINAIS DE TV',
                        'Z19 : 8529.90.19 EX - CODIFICADOR DE VÍDEO HD MPEG2-H264',
                        'Z2 : 8523.51.90 - IMPORTAÇÃO DIRETA',
                        'Z20 : 8543.70.40 TRANSCOD OU CONV DE PADROES DE TV',
                        'Z200 : 8414.59.10 - IMPORTAÇÃO DIRETA',
                        'Z201 : 8414.59.10 - IMPORTADO SUBSTITUIDO',
                        'Z20I : 8414.59.10 - IMPORTADO AD MERC INTERNO',
                        'Z21 : 8523.49.20 - IMPORTAÇÃO DIRETA',
                        'Z21I : 8523.49.20 - (S/ST) IMPORTADO AD MERC INTERNO',
                        'Z22 : 8518.21.00 - ALTO FALANTE',
                        'Z221 : 8523.51.90 - NACIONAL - ORIGEM SP',
                        'Z23 : 8471.60.59 - OUTRAS UNIDADES DE ENTRADA',
                        'Z24 : 8528.69.10 - PROJETOR DMP',
                        'Z25 : 8471.60.90 - OUTRAS UNIDADES DE ENTRADA OU SAIDA',
                        'Z26 : 8543.70.19 - AMPLIIFI P TRANS DE RF DE SUPER ALTA',
                        'Z27 : 8507.60.00 - (S/ST) - IMPORTAÇÃO DIRETA',
                        'Z27I : 8507.60.00 - IMPORTADO AD MERC INTERNO - (S/ST)',
                        'Z28 : MOVEIS DE MADEIRA PARA ESCRITORIO',
                        'Z29 : 7413.00.00 - CORDAS, CABOS, TRANÇAS (ENTRANÇADOS)',
                        'Z291 : 8501.61.00 - DE POTÊNCIA NÃO SUPERIOR A 75 KVA',
                        'Z2I : 8523.51.90 - IMPORTADO AD MERC INTERNO',
                        'Z2S : 8523.51.90 - IMPORTADO SUBSTITUIDO - SP',
                        'Z3 : 8536.30.00 - IMPORTAÇÃO DIRETA',
                        'Z30 : 8537.10.20 - CONTROLADORES PROGRAMÁVEIS',
                        'Z31 : 8543.70.99EX 052',
                        'Z32 : 9030.40.90',
                        'Z321 : 9030.90.90',
                        'Z322 : OUTROS,INSTR. AP. P/REG., CONTR.GRAND.N/ELETRICAS',
                        'Z33 : 8517.62.49 EX012 - ***** VENCIDO ***** RECLASSIFICAR *****',
                        'Z34 : 8473.30.41 - PLACA-MÃE (MOTHER BOARDS)',
                        'Z35 : 8517.62.39EX001-DISTR.DE CONEXOES P/ REDES(SWITCH)',
                        'Z36 : 8536.10.00 - FUSIVEIS E CORTA-CIRCUITOS DE FUSIVES',
                        'Z37 : 8525.80.19 - OUTRAS - CAMERAS DE TV, VIDEO, DIG',
                        'Z38 : 8536.50.90 - OUTROS - OUTROS INTERRUPTORES, SECCIS',
                        'Z38S : 8536.50.90 - IMPORTADO SUBSTITUIDO - SP',
                        'Z39 : 8517.12.90 - OUTROS - TELEFONES PARA REDES CELULAO',
                        'Z3I : 8536.30.00 - IMPORTADO AD MERC INTERNO',
                        'Z3S : 8536.30.00 - IMPORTADO SUBSTITUIDO - SP',
                        'Z40 : 8543.70.39 - OUTS.MÁQ.E APARELHOS AUXILIARES P/VÍO',
                        'Z45 : 8703.23.10 - VEÍCULOS AUTOMÓVEIS, TRATORES, CICLOS E OUTROS VEÍCULOS TERRESTRES, SUAS PARTES E ACESSÓRIOS',
                        'Z46 : 4202.12.20 - MALAS MALETAS E PASTAS DE MATERIAS TEXTEIS',
                        'Z47 : 8517.62.49 EX017 - ROTEADORES C/ INFRAESTRUTURA PARA REDES DE INTERNET',
                        'Z48 : 4202.11.00 - MALAS,MALETS.,C/SUP.EXT.COU.NAT.,REC.ENVERN',
                        'Z49 : 4202.12.10 - MALAS,MALETAS,C/SUPERFÍCIE EXT. D/PLÁSTICO',
                        'Z50 : 4202.19.00 - MALAS,MALETAS,C/SUPERFÍCIE D/OUTS. MATÉRIAS',
                        'Z51 : 4202.29.00 - BOLSAS,C/SUPERFÍCIE EXT.D/OUTRAS MATÉRIAS',
                        'Z52 : 4202.92.00 - OUTS.ART.C/SUPERF.EXT.D/FLS.D/PLÁST/.MAT.TÊXT.',
                        'Z53 : 8301.10.00 - CADEADO DE METAL COMUM',
                        'Z54 : 8301.40.00 - OUTS.FECHADURAS;FERROLHOS,D/METAL COMUM',
                        'Z55 : 85299020 - OUTS.PARTS.P/APS.RECEPT.RADIODIF.,TELEV.ETC',
                        'Z60 : 8536.70.00 - CONECTORES FEIXES OU CABOS D/FIBRA ÓPTICA',
                        'Z62 : 8471.60.62 - IMPORTAÇÃO DIRETA',
                        'Z62I : 8471.60.62 - (S/ST) IMPORTADO AD MERCADO INTERNO',
                        'Z82 : 9032.89.82 -IMPORTAÇÃO DIRETA',
                        'Z82I : 9032.89.82 - (S/ST) IMPORTADO AD MERC INTERNO'
                    ];

                    cfiscalProp.CFiscalAR = { readOnly: true, value: 'Not required', source: ['Not required'] };
                    cfiscalProp.CFiscalCH = { readOnly: true, value: 'Not required', source: ['Not required'] };
                } else if (type == 'Service' || type == 'Software') {
                    cfiscalProp.CFiscalBR.source = [
                        'IAC : INTANGÍVEL - ASSESSORIA E CONSULTORIA',
                        'IIND : INTANGÍVEL - CLASSIFICAÇÃO NÃO DEFINIDA',
                        'IINS : INTANGÍVEL - INSTALAÇÃO',
                        'ILCP : INTANGÍVEL - LICENCIAMENTO OU CESSÃO DE DIREITO DE USO DE PROGRAMA DE COMPUTAÇÃO',
                        'ISUP : INTANGÍVEL - SUPORTE',
                        'ITR : INTANGÍVEL - TREINAMENTO'
                    ];

                    cfiscalProp.CFiscalAR = { readOnly: true, value: 'Not required', source: ['Not required'] };
                    cfiscalProp.CFiscalCH = { readOnly: true, value: 'Not required', source: ['Not required'] };
                } else {
                    cfiscalProp.CFiscalAR = { readOnly: true, value: 'Not required', source: ['Not required'] };
                    cfiscalProp.CFiscalBR = { readOnly: false, value: 'Selct type and region', source: [''] };
                    cfiscalProp.CFiscalCH = { readOnly: true, value: 'Not required', source: ['Not required'] };
                }

                break;

            case 'Chile':

                cfiscalProp.CFiscalCH.readOnly = false;
                cfiscalProp.CFiscalCH.value = 'Select a fiscal code';

                if (type == 'Hardware') {

                    cfiscalProp.CFiscalCH.source = [
                        'ACC : ACCESORIO',
                        'BC : BIEN DE CAPITAL'
                    ]

                    cfiscalProp.CFiscalAR = { readOnly: true, value: 'Not required', source: ['Not required'] };
                    cfiscalProp.CFiscalBR = { readOnly: true, value: 'Not required', source: ['Not required'] };

                } else if (type == 'Service' || type == 'Software') {

                    cfiscalProp.CFiscalCH.value = 'Z99 : SOFTWARE O SERVICIO'
                    cfiscalProp.CFiscalCH.source = ['Z99 : SOFTWARE O SERVICIO']

                    cfiscalProp.CFiscalAR = { readOnly: true, value: 'Not required', source: ['Not required'] };
                    cfiscalProp.CFiscalBR = { readOnly: true, value: 'Not required', source: ['Not required'] };

                } else {
                    cfiscalProp.CFiscalAR = { readOnly: true, value: 'Not required', source: ['Not required'] };
                    cfiscalProp.CFiscalBR = { readOnly: true, value: 'Not required', source: ['Not required'] };
                    cfiscalProp.CFiscalCH = { readOnly: false, value: 'Selct type and region', source: [''] };
                }
                break;
        }

        return cfiscalProp
    }

    function getOriginProp(region) {

        var originProp

        if (region == 'Brazil') {
            originProp = {
                value: 'Select origin',
                readOnly: false,
                source: [
                    '1 : Nacional, exceto as indicadas nos códigos 4, 5, 6 e 9',
                    '2 : Estrangeira - Importação direta, exceto a indicada no código 7',
                    '3 : Estrangeira - Adquirida no mercado interno, exceto a indicada no código 8',
                    '4 : Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% (quarenta por cento) e inferior ou igual a 70% (setenta por cento)',
                    '5 : Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam o Decreto-Lei nº 288/67, e as Leis nºs 8248/91, 8387/91, 10176/01 e 11484/07',
                    '6 : Nacional, mercadoria ou bem com conteúdo de importação inferior ou igual a 40%',
                    '7 : Estrangeira - Importação direta, sem similar nacional, constante em lista de resolução CAMEX',
                    '8 : Estrangeira - Adquirida no mercado interno, sem similar nacional, constante em lista de Resolução CAMEX',
                    '9 : Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70% (setenta por cento)'
                ]

            }
        } else {
            originProp = {
                value: 'Not required',
                readOnly: true,
                source: ['Not required']
            }
        }

        return originProp
    }

    // Update settings of spreadsheet after any change
    hot.updateSettings({
        afterChange: function (changes, src) {
            var row = changes[0][0],
                col = changes[0][1],
                newValue = changes[0][3];

            var myTypeInfo = getTypeInfo(newValue),
                mySrcVendorInfo = getVendorInfo(newValue),
                myType = hot.getDataAtCell(row, 6),
                myRegion = hot.getDataAtCell(row, 10),
                mySettingsCFiscal = getCFiscalProp(myType, myRegion),
                myOrigin = getOriginProp(myRegion);

            switch (col) {

                // Set dynamic values for columns that depend on Type
                case 'colType':
                    with (hot) {
                        setDataAtRowProp(row, 'colGroup', myTypeInfo.groupProp.value);
                        setCellMeta(row, 7, 'source', myTypeInfo.groupProp.source);
                        setCellMeta(row, 7, 'readOnly', myTypeInfo.groupProp.readOnly);

                        setDataAtRowProp(row, 'colCFiscalAR', mySettingsCFiscal.CFiscalAR.value);
                        setCellMeta(row, 11, 'source', mySettingsCFiscal.CFiscalAR.source);
                        setCellMeta(row, 11, 'readOnly', mySettingsCFiscal.CFiscalAR.readOnly);

                        setDataAtRowProp(row, 'colCFiscalBR', mySettingsCFiscal.CFiscalBR.value);
                        setCellMeta(row, 12, 'source', mySettingsCFiscal.CFiscalBR.source);
                        setCellMeta(row, 12, 'readOnly', mySettingsCFiscal.CFiscalBR.readOnly);

                        setDataAtRowProp(row, 'colCFiscalCH', mySettingsCFiscal.CFiscalCH.value);
                        setCellMeta(row, 13, 'source', mySettingsCFiscal.CFiscalCH.source);
                        setCellMeta(row, 13, 'readOnly', mySettingsCFiscal.CFiscalCH.readOnly);
                    }
                    break;

                // Set dynamic values for columns that depend on Region
                case 'colRegion':

                    with (hot) {
                        // Set options for CFiscal columns
                        setDataAtRowProp(row, 'colCFiscalAR', mySettingsCFiscal.CFiscalAR.value);
                        setCellMeta(row, 11, 'source', mySettingsCFiscal.CFiscalAR.source);
                        setCellMeta(row, 11, 'readOnly', mySettingsCFiscal.CFiscalAR.readOnly);

                        setDataAtRowProp(row, 'colCFiscalBR', mySettingsCFiscal.CFiscalBR.value);
                        setCellMeta(row, 12, 'source', mySettingsCFiscal.CFiscalBR.source);
                        setCellMeta(row, 12, 'readOnly', mySettingsCFiscal.CFiscalBR.readOnly);

                        setDataAtRowProp(row, 'colCFiscalCH', mySettingsCFiscal.CFiscalCH.value);
                        setCellMeta(row, 13, 'source', mySettingsCFiscal.CFiscalCH.source);
                        setCellMeta(row, 13, 'readOnly', mySettingsCFiscal.CFiscalCH.readOnly);


                        // Set options for origin column
                        setDataAtRowProp(row, 'colOrigin', myOrigin.value);
                        setCellMeta(row, 14, 'source', myOrigin.source);
                        setCellMeta(row, 14, 'readOnly', myOrigin.readOnly);
                    }
                    break;

                case 'colVendor':
                    // set dynamic values for Family column
                    hot.setCellMeta(row, 1, 'source', mySrcVendorInfo.codParteFamilia)

                    // set dynamic values for Standard Purchase Discount column
                    hot.setDataAtRowProp(row, 'colDiscount', mySrcVendorInfo.cellValue);
                    hot.setCellMeta(row, 8, 'source', mySrcVendorInfo.codParteDesconto);

                    // set dynamic values for Sales Factor column
                    hot.setDataAtRowProp(row, 'colSalesFactor', mySrcVendorInfo.cellValue);
                    hot.setCellMeta(row, 9, 'source', mySrcVendorInfo.codFator);
                    break;
            }

            hot.render();
        }
    });

    setTimeout(function () {
        hot.updateSettings({
            cells: function (row, col) {
                var cellProp = {};
                switch (col) {
                    case 0:
                        cellProp.type = 'dropdown';
                        cellProp.source = vendorList;
                        break;

                    case 1:
                        cellProp.type = 'dropdown';
                        break;

                    case 5:
                        cellProp.type = 'numeric';
                        cellProp.numericFormat = {
                            pattern: '$0,0.00',
                            culture: 'en-US'
                        };
                        break;

                    case 6:
                        cellProp.type = 'dropdown';
                        cellProp.source = ['Hardware', 'Service', 'Software']
                        break;

                    case 7:
                        cellProp.type = 'dropdown';
                        break;

                    case 8:
                        cellProp.type = 'dropdown';
                        break;

                    case 9:
                        cellProp.type = 'dropdown';
                        break;

                    case 10:
                        cellProp.type = 'dropdown';
                        cellProp.source = ['Argentina', 'Brazil', 'CALA/CCA', 'Chile', 'Colombia', 'Ecuador', 'Mexico', 'Peru'];
                        break;

                    case 11:
                        cellProp.type = 'dropdown';
                        break;

                    case 12:
                        cellProp.type = 'dropdown';
                        break;

                    case 13:
                        cellProp.type = 'dropdown';
                        break;

                    case 14:
                        cellProp.type = 'dropdown';
                        break;

                    case 17:
                        cellProp.type = 'dropdown';
                        cellProp.source = ['Restricted', 'Unrestricted', 'No License Required'];
                        break;
                }
                return cellProp
            }
        })
    }, 50)



    // POST method gets data to the Controller
    Handsontable.dom.addEvent(btnSubmit, 'click', function () {

        // Submit botton actions
        var
            $$ = function (id) { return document.getElementById(id); },
            //btnSubmit = $$('btnSubmit'),
            //exampleConsole = $$('exampleConsole'),
            //myData = JSON.stringify(hot.getData());
            myData = {};

        myData.vendorName = hot.getDataAtProp('colVendor');
        myData.familyName = hot.getDataAtProp('colFamily');
        myData.partNumber = hot.getDataAtProp('sku');
        myData.itemDescription = hot.getDataAtProp('itemDescription');
        myData.invoiceDescription = hot.getDataAtProp('invoiceDescr');
        myData.listPrice = hot.getDataAtProp('price');
        myData.itemType = hot.getDataAtProp('colType');
        myData.itemGroup = hot.getDataAtProp('colGroup');
        myData.purchaseDiscount = hot.getDataAtProp('colDiscount');
        myData.salesFactor = hot.getDataAtProp('colSalesFactor');
        myData.region = hot.getDataAtProp('colRegion');
        myData.cFiscalAR = hot.getDataAtProp('colCFiscalAR');
        myData.cFiscalBR = hot.getDataAtProp('colCFiscalBR');
        myData.cFiscalCH = hot.getDataAtProp('colCFiscalCH');
        //myData.cFiscalCO = hot.getDataAtProp('colCFsicalCO'), // Disabled for now
        myData.origin = hot.getDataAtProp('colOrigin');
        myData.eccn = hot.getDataAtProp('colECCN');
        myData.ccats = hot.getDataAtProp('colCCATS');
        myData.licenseDesignation = hot.getDataAtProp('colLicDes');

        $.ajax({
            url: './register-new-sku2.aspx/GetData',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            //data: '{vendor:' + JSON.stringify(myData) + '}',
            //data: JSON.stringify(myData),
            data: '{mydata:' + JSON.stringify(myData) + '}',
            async: true,
            processData: false,
            cache: false,
            success: function (res) {

                exampleConsole.innerHTML = 'Success! <br /> Response: ' + JSON.stringify(res.d); //'<br /> Data sent: ' + myData;
                console.log('Response:');
                console.log(res.d)
                //console.log('Data sent:');
                //console.log(myData);
            },
            error: function (xhr) {
                if (xhr.status == 200) {
                    exampleConsole.innerHTML = 'error ' + '<br />' +
                        JSON.stringify(myData) + '<br />' +
                        xhr.status + '<br />' +
                        xhr.statusText + '<br />' +
                        xhr.responseText;
                    //exampleConsole.innerHTML = JSON.stringify(hot.getData());
                    console.log('Response:');
                    console.log(JSON.stringify(xhr))
                    console.log('Data sent:');
                    console.log(myData);
                }
            }
        })
    });




});