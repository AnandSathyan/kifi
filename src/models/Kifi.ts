export interface data {
  title: string;
  image: string;
  price: BigInteger;
  result: string[];
}
export interface param {
  jsonrpc: "2.0";
  params: {
    model: "stock.location";
    method: "get_location";
    args: [];
  };
}
