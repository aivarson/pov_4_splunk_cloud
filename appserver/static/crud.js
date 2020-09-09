require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc) {

var tokens = mvc.Components.get('submitted');

/* --- Search Reference --- */
var inputCollectionSearch = mvc.Components.get('inputCollectionSearch');
var updateSearch = mvc.Components.get('updateSearch');
var createSearch = mvc.Components.get('createSearch');
var deleteSearch = mvc.Components.get('deleteSearch');


/* --- Table Reference --- */
var taskCollectionTable = mvc.Components.get('inputCollectionTable');

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
} else if(e['field'] === 'Delete') {

    tokens.set('delete_key_tok', e.data['row._key']);

}

$('form *').filter(':input').each(function(){
   var value = $(this).val();
   console.log(value);
});


 });
 
$(document).on('click', '#submitButton', function(e) { 

e.preventDefault();

    if(_key_Input.val() != '') {
        /* --- this is an update --- */
		tokens.set('update_key_tok', _key_Input.val());
		tokens.set('update_CustomerName_tok', CustomerName_Input.val());
		tokens.set('update_CustomerPOCEmail_tok', CustomerPOCEmail_Input.val());
		tokens.set('update_CustomerPOCName_tok', CustomerPOCName_Input.val());
		tokens.set('update_LicenseSizeGB_tok', LicenseSizeGB_Input.val());
		tokens.set('update_SalesEngineerEmail_tok', SalesEngineerEmail_Input.val());
		tokens.set('update_SalesEngineerName_tok', SalesEngineerName_Input.val());
		tokens.set('update_DataSource1_tok', DataSource1_Input.val());
		tokens.set('update_DataSource2_tok', DataSource2_Input.val());
		tokens.set('update_DataSource3_tok', DataSource3_Input.val());
		tokens.set('update_DataSource4_tok', DataSource4_Input.val());
		tokens.set('update_DataSource5_tok', DataSource5_Input.val());
		tokens.set('update_UseCase1_tok', UseCase1_Input.val());
		tokens.set('update_UseCase2_tok', UseCase2_Input.val());
		tokens.set('update_UseCase3_tok', UseCase3_Input.val());
		tokens.set('update_Notes_tok', Notes_Input.val());
} else {
    	  /* --- this is new so create --- */
        tokens.set('create_tok', 'true');
		tokens.set('create_CustomerName_tok', CustomerName_Input.val());
		tokens.set('create_CustomerPOCEmail_tok', CustomerPOCEmail_Input.val());
		tokens.set('create_CustomerPOCName_tok', CustomerPOCName_Input.val());
		tokens.set('create_LicenseSizeGB_tok', LicenseSizeGB_Input.val());
		tokens.set('create_SalesEngineerEmail_tok', SalesEngineerEmail_Input.val());
		tokens.set('create_SalesEngineerName_tok', SalesEngineerName_Input.val());
		tokens.set('create_DataSource1_tok', DataSource1_Input.val());
		tokens.set('create_DataSource2_tok', DataSource2_Input.val());
		tokens.set('create_DataSource3_tok', DataSource3_Input.val());
		tokens.set('create_DataSource4_tok', DataSource4_Input.val());
		tokens.set('create_DataSource5_tok', DataSource5_Input.val());
		tokens.set('create_UseCase1_tok', UseCase1_Input.val());
		tokens.set('create_UseCase2_tok', UseCase2_Input.val());
		tokens.set('create_UseCase3_tok', UseCase3_Input.val());
		tokens.set('create_Notes_tok', Notes_Input.val());
    	}

});

	/* --- Search Jobs --- */
	updateSearch.on('search:done', function() {


    inputCollectionSearch.startSearch();
    $('form *').filter(':input').each(function(){
        $(this).val('');
    	});


	});

	createSearch.on('search:done', function() {


        inputCollectionSearch.startSearch();


        $('form *').filter(':input').each(function(){
            $(this).val('');
   	 });


    });
    
    deleteSearch.on('search:done', function() {


    inputCollectionSearch.startSearch();


    tokens.unset('delete_key_tok');


	});

});


