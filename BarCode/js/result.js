window.addEventListener('load', () => {
/* Parametars from index.html using GET */
    const params = (new URL(document.location)).searchParams;
    const lotcode = params.get('lotcode');
    const productiondate = params.get('productiondate');
    const expirationdate = params.get('expdate');
    const shiftid = params.get('shiftid');
    const weight = params.get('weight');

/* Formating date mm/dd/yyyy => yymmdd  */
    function refractDate(a){
        var datefin = a.replaceAll("-","").substr(2);
        return datefin;
    };

/* Formating weight 1.23 => 123 */    
    function refractWeight(a){
        var weightFin = a.replaceAll(".", "");
            return weightFin;
    }
/*Final variables from parameters */    
    var finExp = refractDate(expirationdate);
    var finDate = refractDate(productiondate);
    var finWeight = refractWeight(weight);
    
    var finalLotCode = `11${finDate}1050000000${lotcode}${shiftid}`;
    var finalExpirationDateCode =`3102000${finWeight}17${finExp}`;
    
    JsBarcode("#lot-code", finalLotCode, {format: "CODE128A"});
    JsBarcode("#expiration-date", finalExpirationDateCode, {format: "CODE128A"});
    
})