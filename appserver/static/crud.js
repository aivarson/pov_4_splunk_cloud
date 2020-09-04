require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc) {

/* --- Define the form inputs --- */
var CustomerName_Input = $('[name="CustomerName"]');
var CustomerPOCEmail_Input = $('[name="CustomerPOCEmail"]');
var CustomerPOCName_Input = $('[name="CustomerPOCName"]');
var LicenseSizeGB_Input = $('[name="LicenseSizeGB"]');
var DataSource1_Input = $('[name="DataSource1"]')
var DataSource2_Input = $('[name="DataSource2"]')
var DataSource3_Input = $('[name="DataSource3"]')
var DataSource4_Input = $('[name="DataSource4"]')
var DataSource5_Input = $('[name="DataSource5"]')
var SalesEngineerEmail_Input = $('[name="SalesEngineerEmail"]')
var SalesEngineerName_Input = $('[name="SalesEngineerName"]')
var UseCase1_Input = $('[name="UseCase1"]')
var UseCase2_Input = $('[name="UseCase2"]')
var UseCase3_Input = $('[name="UseCase3"]')
var Notes_Input = $('[name="Notes"]')
var _key_Input = $('[name="_key"]')

/* --- Reference to the input values --- */
var CustomerName_Val, CustomerPOCEmail_Val, CustomerPOCName_Val, LicenseSizeGB_Val, DataSource1_Val, DataSource2_Val, DataSource3_Val, DataSource4_Val, DataSource5_Val, SalesEngineerEmail_Val, SalesEngineerName_Val, UseCase1_Val, UseCase2_Val, UseCase3_Val, Notes_Val, _key_Val;

var inputCollectionTable = mvc.Components.get('inputCollectionTable');

    inputCollectionTable.on('click', function(e) {

       e.preventDefault();
    
if(e['field'] === 'Update' ) { 

/* --- Pull values from the current table row --- */
CustomerName_Val = e.data['row.CustomerName'];
CustomerPOCEmail_Val = e.data['row.CustomerPOCEmail'];
CustomerPOCName_Val = e.data['row.CustomerPOCName'];
LicenseSizeGB_Val = e.data['row.LicenseSizeGB'];
SalesEngineerEmail_Val = e.data['row.SalesEngineerEmail'];
SalesEngineerName_Val = e.data['row.SalesEngineerName'];
DataSource1_Val = e.data['row.DataSource1'];
DataSource2_Val = e.data['row.DataSource2'];
DataSource3_Val = e.data['row.DataSource3'];
DataSource4_Val = e.data['row.DataSource4'];
DataSource5_Val = e.data['row.DataSource5'];
UseCase1_Val = e.data['row.UseCase1'];
UseCase2_Val = e.data['row.UseCase2'];
UseCase3_Val = e.data['row.UseCase3'];
Notes_Val = e.data['row.Notes'];
_key_Val = e.data['row._key'];

/* --- Insert values from rows into input fields --- */
CustomerName_Input.val(CustomerName_Val);
CustomerPOCEmail_Input.val(CustomerPOCEmail_Val);
CustomerPOCName_Input.val(CustomerPOCName_Val);
LicenseSizeGB_Input.val(LicenseSizeGB_Val);
SalesEngineerEmail_Input.val(SalesEngineerEmail_Val);
SalesEngineerName_Input.val(SalesEngineerName_Val);
DataSource1_Input.val(DataSource1_Val);
DataSource2_Input.val(DataSource2_Val);
DataSource3_Input.val(DataSource3_Val);
DataSource4_Input.val(DataSource4_Val);
DataSource5_Input.val(DataSource5_Val);
UseCase1_Input.val(UseCase1_Val);
UseCase2_Input.val(UseCase2_Val);
UseCase3_Input.val(UseCase3_Val);
Notes_Input.val(Notes_Val);
_key_Input.val(_key_Val);

$('form *').filter(':input').each(function(){
   var value = $(this).val();
   console.log(value);
});

}

 });

});


