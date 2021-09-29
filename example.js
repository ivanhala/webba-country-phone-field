jQuery(document).on( 'wbk_on_form_rendered', function(){
	jQuery('.wpcf7-phonetext').intlTelInput({
		autoPlaceholder: "off",
	    hiddenInput: "full_number",
		nationalMode: false,
    });
    jQuery('.wpcf7-phonetext').attr('style', 'padding-left: 52px !important;');
});
