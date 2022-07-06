export const validateInputField = (label, type, value)=>{
    // si le champs est vide on retourne une erreur
    if(value === "") {
       return "Le champs "+label+" est vide !"; 
    }
    
    //conditions switch sur type
    switch(type){
        //email
        case "email":
            // on test le mail à l'aide d'un regex qui teste les mails
            const regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            
            // si le test du regex est faux, alors on retourne une string d'erreur
            if(regMail.test(value) === false){
                return "Votre mail n'est pas valide !!!";
            }
        break;    
        //password
        case "password":
            /* on test le mot de passe à l'aide d'un regex qui teste les strings pour avoir 8 chiffres,lettre, majuscule, minuscule, caractère spécial*/
            const regPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
            
            // si le test du regex est faux, alors on retourne une string d'erreur
            if(regPass.test(value) === false) {
                // si le test du regex est faux, alors on retourne une string d'erreur
                return "Le champs : "+label+" doit contenir 8 caractères et au moins : un chiffre, une lettre, une majuscule, une minuscule et un caractère spécial";
            }
            
        break;    
        //age
        case "age":
            // on teste si l'age est correct chiffre et ne doit pas être supérieur à 122
            if(isNaN(Math.round(value))) {
                return "Vous n'avez pas rentré un chiffre pour le champ "+label;
            } else if (value > 122) {
                return "Votre age ne peut pas aller au delà de 122 ans !"
            }
        break;
        //max20 (addresse)
        case "max20":
            // on ne dépasse les 20 caractères
            if(value.length > 20) {
                return "Votre champs : "+label+" possède plus de 20 caractères..."
            }
        break;   
    }        
    // si tout va bien on retourne true, le champ de formulaire est validé
    return true;
}

