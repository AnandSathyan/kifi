export interface ProductInterface {
    errorcode:    number;
    errormessage: string;
    data:         Datum[];
}

 interface Datum {
    id:                number;
    sku:               string;
    product_erp_code:  null;
    name:              string;
    description:       string;
    category_id:       number;
    sub_category_id:   number;
    url_key:           null;
    new:               number;
    featured:          number;
    erp_status:        Status;
    status:            Status;
    average_rating:    null | string;
    thumbnail:         string;
    position:          number;
    short_description: string;
    meta_title:        string;
    meta_keywords:     null;
    meta_description:  null;
    deleted_at:        null;
    created_at:        Date;
    updated_at:        Date;
    thumbnail_url:     string;
    category:          Category;
    sub_category:      Category;
    price_list:        PriceList;
}

interface Category {
    id:                     number;
    name:                   string;
    category_erp_code?:     null;
    category_master_id?:    number;
    description:            string;
    image:                  string;
    position:               number;
    erp_status:             Status;
    status:                 Status;
    deleted_at:             null;
    created_at:             Date;
    updated_at:             Date;
    image_url:              string;
    sub_category_erp_code?: null;
    category_id?:           number;
}

 enum Status {
    Active = "active",
}

 interface PriceList {
    id:                     number;
    product_price_erp_code: null | string;
    product_id:             number;
    location_id:            number;
    unit_price:             string;
    tax_percentage:         number;
    tax_value:              string;
    tax_type:               string;
    mrp:                    string;
    sale_price:             string;
    total_stocks:           number;
    remaining_stocks:       number;
    deleted_at:             null;
    created_at:             Date;
    updated_at:             Date;
}
