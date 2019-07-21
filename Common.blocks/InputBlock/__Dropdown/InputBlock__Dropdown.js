// /** 
// * Includs widget multiselect 
// */
// $(".InputBlock__Dropdown").multiselect({
//   showCheckAll: false,
//   buttonWidth: 'auto',
//   noneSelectedText: ' ',
//   open: function(){
//     $('.ui-multiselect-checkboxes').css('height', 'auto');
//   },
//   //classes: 'InputBlock_Color_Dark75 InputBlock_MrBot_19px InputBlock_LetterSpacing_0px InputBlock_PdTop_11px InputBlock_Appearan_none InputBlock_Width_265px InputBlock__Dropdown',
//   selectedList: 2,
// 	selectedText: function(numChecked, numTotal, checkedItems){
//     this.$button[0].children[0].children[0].outerHTML = '<i class="material-icons">expand_more</i>'; 
//     value = this.$inputs.filter(':checked').map(function() { 

//       /** 
//       * This adds the number of selected items before name of the this item in widget field
//       */
//       var valInputNumber = $(this).siblings('.QuantityBlock').children('input').val();
//       if (!valInputNumber) {
//         valInputNumber = "2 ";
//       } else {
//         valInputNumber += " ";
//       }

//       return $(this).next().text().replace(/\n$/, '').replace(/^/, valInputNumber); 

//     }).get().join( this.options.selectedListSeparator);

//     /** 
//     * This adds "..." to the end of the string that locate in widget field
//     */
//     if (numChecked >= 2) {
//       var str = value.match( /^[^,]+, \d+ [^,]+/i );
//       value = str[0] + '...';
//     }

//     return value;
// 	},
// });


// /** 
// * This are adding styles for widget dropdown
// */
// $(".InputBlock__Dropdown").each(function(index, el) {
//   $(this).next().addClass( $(this).attr('class') );
// });


// /** 
// * Creating custom buttons instead of default buttons in <input type="number"> 
// */
// $('.ui-multiselect-checkboxes label')
// .append('<div class="QuantityBlock">' +
//           '<button class="QuantityBlock__IconMinus"> - </button>' +
//           '<input class="QuantityBlock__Num" type="text"  />' +
//           '<button class="QuantityBlock__IconPlus"> + </button>' +
//         '</div>');

// /** 
// * This passes to the attribute 'name' the value that was obtained from the widget menu <input> tags
// */
// $('.ui-multiselect-checkboxes input[type=checkbox]').each(function(index) {
//   $(this).siblings('.QuantityBlock').children('input').attr('name', $(this).val());
// });

// /** 
// * This events are adding count of selected items in multiselect widget and in <option> tags 
// */
// $(".QuantityBlock__IconPlus").click(function(eventObject){ 
//   var targetPlus = $(this).prev();
//   targetPlus.val( +targetPlus.val() + 1 ); //This adds the number of selected elements in the “value” attribute of the “input” tag.

//   /** 
//   * This is changes text in 'widget field' the by adding number of selected elements using a regular expression
//   */
//   var widgetId = $(this).parent('.QuantityBlock').siblings('input').attr('id');
//   widgetId = widgetId.match(/^[^-]+-[^-]+-[^-]+-([^-]+)/i);

//   var InputNameAttr = targetPlus.attr('name');
//   var optionsContent = $('#' + widgetId[1] + ' option[value='+InputNameAttr+']').text(); // getting the contents of the <option> tag by the value of the "name" attribute of clicked element
//   var dropDownText = $('#' + widgetId[1] + '_ms span:last').text();
  
//   var regular = new RegExp('\\d+ ' + optionsContent, 'i');
//   var modifiedText = dropDownText.replace( regular, targetPlus.val() + ' ' + optionsContent );
  
//   $('#' + widgetId[1] + '_ms span:last').text(modifiedText);
// });

// $(".QuantityBlock__IconMinus").click(function(eventObject){
//   var targetMinus = $(this).next();
//   if (targetMinus.val() > 0) {
//     targetMinus.val( +targetMinus.val() - 1 );

//     var widgetId = $(this).parent('.QuantityBlock').siblings('input').attr('id');
//     widgetId = widgetId.match(/^[^-]+-[^-]+-[^-]+-([^-]+)/i);

//     var InputNameAttr = targetMinus.attr('name');
//     var optionsContent = $('#' + widgetId[1] + ' option[value='+InputNameAttr+']').text(); // getting the contents of the <option> tag by the value of the "name" attribute of clicked element
//     var dropDownText = $('#' + widgetId[1] + '_ms span:last').text();
    
//     var regular = new RegExp('\\d+ ' + optionsContent, 'i');
//     var modifiedText = dropDownText.replace( regular, targetMinus.val() + ' ' + optionsContent );
    
//     $('#' + widgetId[1] + '_ms span:last').text(modifiedText);
//   }
// });