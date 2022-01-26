
const botonEncriptar= document.querySelector("#btn-encriptar");
const botonDesencriptar= document.querySelector("#btn-desencriptar");
const botonCopy = document.querySelector("#btn-copy");


const textoEntrada= document.getElementById("input-texto");
const textoSalida= document.getElementById("msg");

      // murcielago

/*
textoEntrada.addEventListener("copy", (e) => {
   textoSalida.value= "copiado";
});
*/

async function copiarEnElPortapapeles(){
   
   //navigator.clipboard.readText().then(texto => {
   //       textoEntrada.value = texto;
   //}

   await navigator.clipboard.writeText(textoSalida.value)
   
   .catch(error => {
      // Por si el usuario no da permiso u ocurre un error
      console.log("Hubo un error: ", error);
   });

} 

botonCopy.addEventListener("click", () => {
   if(navigator.clipboard){
      //Perfecto, podemos usarlo
      copiarEnElPortapapeles();
      
    }else{
      //No soporta la API, tenemos que usar viejos métodos
    }

});


function encriptar(){
   
   let texto= textoEntrada.value; 
   let aux="";
   
   texto= texto.toLowerCase();
   
   for(let i=0; i < texto.length; i++){
      let st="";
      let car= texto[i];
      switch ( car ){
         case "a": 
                  st="ai";            
                  break;
         case "e":
                  st="enter";      
                  break;
         case "i":
                  st="imes";      
                  break;
         case "o":
                  st="ober";      
                  break;  
         case "u":
                  st="ufat";      
                  break;             
         default:
                  st= car;
                  break;
      }

      aux+= st;
   }
   
   textoSalida.value= aux;

}

function desencriptar(){
   
   let texto= textoEntrada.value; 
   let aux="";
   
   texto= texto.toLowerCase();
   
   let i=0;
   while ( i < texto.length){
      let st="";
      let car= texto[i];
      switch ( car ){
         case "a":             //st="ai";            
                  st= "a";
                  i+= 2;
                  break;
         case "e":            //st="enter";  
                  st= "e";
                  i+= 5;    
                  break;
         case "i":            //st="imes";      
                  st="i";
                  i+= 4;
                  break;
         case "o":            //st="ober";      
                  st= "o";
                  i+= 4;
                  break;  
         case "u":            //st="ufat";      
                  st= "u";
                  i+= 4;
                  break;             
         default:
                  st= car;          
                  i += 1;        
                  break;
      }
      aux+= st;   
   }   
   
   textoSalida.value= aux;

}


botonDesencriptar.addEventListener("click", (event) => {
   event.preventDefault();
   desencriptar();
   
});

botonEncriptar.addEventListener("click", (event) => {
   event.preventDefault();
   encriptar();
   
});

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/