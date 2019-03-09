var rezultat = '0';
var levi_operand = 0;
var desni_operand = 0;
var operacija = '';
document.getElementById('ekran').innerHTML = rezultat;


function upisiBrojElementId(element){
    
    if(operacija === ''){
        levi_operand = parseFloat(levi_operand.toString() + document.getElementById(element).innerHTML); 
    }
    else {
        desni_operand = parseFloat(desni_operand.toString() + document.getElementById(element).innerHTML);
    }
    osveziEkran();
}

function upisiBroj(br){
    
    if(operacija === ''){
         levi_operand = parseFloat(levi_operand.toString() + br);
    }
    else {
        desni_operand = parseFloat(desni_operand.toString() + br);
    }
    osveziEkran();
}

function dodajNulu(){
    
    if(operacija === ''){
        levi_operand = parseFloat(levi_operand.toString() + '0');
    }
    else {
         desni_operand = parseFloat(desni_operand.toString() + '0');
         document.getElementById('ekran').innerHTML = levi_operand + operacija + desni_operand;
         return;
    }
    osveziEkran();
}

function dodajTacku() {


    if (operacija === '') {
        if (levi_operand === 0) {
            levi_operand = '0.';
        } else {
            levi_operand = (levi_operand.toString() + '.');
        }
    } else {
        if (desni_operand === 0) {
            desni_operand = '0.';

        } else {
            desni_operand = (desni_operand.toString() + '.');
        }
    }
    osveziEkran();
}

function osveziEkran(){
      
   if(rezultat !== '0'){
        document.getElementById('ekran').innerHTML = rezultat;
        operacija = '';
        levi_operand = rezultat;
        desni_operand = 0;
        rezultat = '0';
        return;
   }
  
    if (operacija === '') {
        document.getElementById('ekran').innerHTML = levi_operand;
    } else {
        if (desni_operand !== 0) {
            document.getElementById('ekran').innerHTML = levi_operand + operacija + desni_operand;
        } else {
            document.getElementById('ekran').innerHTML = levi_operand + operacija ;
        }
    }
}

function ocistiEkran(){
    document.getElementById('ekran').innerHTML = 0;
    rezultat = '0';
    levi_operand = 0;
    desni_operand = 0;
    operacija = '';
}


function postaviOperaciju(op){
    
    operacija = op;
    osveziEkran();
    
}

function izracunaj(){

    switch (operacija) {
        case '+':
        {
            rezultat =  levi_operand + desni_operand;
            break;
        }
        case '-':
        {
            rezultat = levi_operand - desni_operand;
            break;
        }
        case '*':
        {
            rezultat = levi_operand * desni_operand;
            break;
        }
        case '/':
        {
            if(desni_operand === 0){
                alert('nije dozvoljeno deljenje nulom');
                return;
            }else{
                rezultat = levi_operand / desni_operand;
            }
            
            break;
        }     
 
        default: break;
    }
    osveziEkran();
}