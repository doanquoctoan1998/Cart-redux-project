import * as types from './../constants/ActionTypes'
var initialState = [
    ,{
        "id": 212,
        "category_id": 22,
        "name": "Asus VivoBook ",
        "price": "12290000",
        "image": "https://cdn.tgdd.vn/Products/Images/44/201930/asus-x507uf-i3-8130u-4gb-1tb-mx130-win10-ej117t-1-1-600x600.jpg",
        "description": "/Man hinh: 15.6 inch, Full HD/CPU: Core i3 Coffee Lake, 2.20 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 SATA3/Do hoa: NVIDIA MX130, 2GB/HDH: Windows 10 Home SL/Nang: 1.68 kg, Pin: 3 cell",
        "trending": 1,
    },
    {
        "id": 213,
        "category_id": 20,
        "name": "Acer Aspire E5 476 i3 ",
        "price": "9490000",
        "image": "https://cdn.tgdd.vn/Products/Images/44/160296/acer-aspire-e5-476-i3-8130u-nxgwtsv002-450-300-1-600x600.jpg",
        "description": "/Man hinh: 14 inch, HD/CPU: Core i3 Kabylake Refresh, 2.20 GHz/RAM: 4 GB, HDD: 500 GB, Ho tro khe cam SSD M.2 PCIe/Do hoa: Intel UHD Graphics 620/HDH: Windows 10 Home SL/Nang: 1.9 kg, Pin: 4 cell",
        "trending": 1,
    },
    {
        "id": 214,
        "category_id": 20,
        "name": "Acer Aspire 3 A315 ",
        "price": "9790000",
        "image": "https://cdn.tgdd.vn/Products/Images/44/207884/acer-aspire-3-a315-54-30fk-i3-7020u-4gb-1tb-win10-18-600x600.jpg",
        "description": "/Man hinh: 15.6 inch, HD 720/CPU: Core i3 Kabylake Refresh, 2.30 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe/Do hoa: Intel UHD Graphics 620/HDH: Windows 10 Home SL/Nang: 1.7 kg, Pin: 2 cell",
        "trending": 1,
    },{
        "id": 235,
        "category_id": 22,
        "name": "Asus VivoBook A512FA",
        "price": "16290000",
        "image": "https://cdn.tgdd.vn/Products/Images/44/202559/asus-a512fa-i5-8265u-8gb-1tb-win10-ej552t-16-1-600x600.jpg",
        "description": "/Man hinh: 15.6 inch, Full HD/CPU: Core i5 Coffee Lake, 1.60 GHz/RAM: 8 GB, HDD: 1 TB SATA3/Do hoa: Intel UHD Graphics 620/HDH: Windows 10 Home SL/Nang: 1.75 kg, Pin: 2 cell",
        "trending": 1,
    },
    {
        "id": 236,
        "category_id": 20,
        "name": "Acer Aspire A515 ",
        "price": "10990000",
        "image": "https://cdn.tgdd.vn/Products/Images/44/198789/acer-aspire-a515-53-3153-i3-8145u-4gb-1gb-win10-n-33397-thumb-1-600x600.jpg",
        "description": "/Man hinh: 15.6 inch, Full HD/CPU: Core i3 Coffee Lake, 2.10 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe/Do hoa: Intel UHD Graphics 620/HDH: Windows 10 Home SL/Nang: 2.0 kg, Pin: 3 cell",
        "trending": 1,
    },
    {
        "id": 237,
        "category_id": 20,
        "name": "Acer Spin 3 SP314 51 ",
        "price": "11990000",
        "image": "https://cdn.tgdd.vn/Products/Images/44/145919/acer-spin-3-sp314-51-39wk-i3-7130u-nxguwsv001-cava-1-600x600.jpg",
        "description": "/Man hinh: 14 inch, Full HD/CPU: Core i3 Kabylake, 2.70 GHz/RAM: 4 GB, HDD: 500 GB, Ho tro khe cam SSD M.2 PCIe/Do hoa: Intel HD Graphics 620/HDH: Windows 10 Home SL/Nang: 1.7 kg, Pin: 3 cell",
        "trending": 1,
    },

];
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_LAPTOP_TRENDING:
            return state;
        default: return state;
    }
};
export default appReducer;