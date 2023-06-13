enum CustomerFieldName {
  CUST_ID = '1',
  CUST_NAME = '2',
  CUST_PH_HOME = '3-1',
  // ect..
}

type StructuredData = Record<CustomerFieldName, string> | {};

class CustomerData {
  private structuredData: StructuredData;

  constructor(private data: string) {
    this.structuredData = this.parse(data);
  }
  parse(data: string): StructuredData {
    const ret = { '1': "Hello World!" };
    // parse data
    return ret;
  }
  getFieldValue(fieldName: CustomerFieldName): string { return this.structuredData[fieldName] }
}

type LimitedFieldCustomerData<T> = Omit<CustomerData, 'getFieldValue'> & {
  getFieldValue: (index: T) => string
}

type NoFieldsCustomerData = LimitedFieldCustomerData<''>

function getCustomerName(custData: NoFieldsCustomerData) {
  return custData.getFieldValue(CustomerFieldName.CUST_NAME);
}

function getCustomerInfo(custData: NoFieldsCustomerData) {
  return {
    id: custData.getFieldValue(CustomerFieldName.CUST_ID),
    phone: custData.getFieldValue(CustomerFieldName.CUST_PH_HOME),
    name: getCustomerName(custData)
  }

  //bar(custData);
};


//type CustomerNameSelectedFields = CustomerFieldName.CUST_NAME;
//type CustomerInfoSelectedFields = CustomerFieldName.CUST_ID | CustomerFieldName.CUST_PH_HOME;
