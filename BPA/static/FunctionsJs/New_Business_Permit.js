

function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]\w+)*@\w+([\.-]\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        return true;
    }else{
        return false;
    }
}

function ValidatePhone(p) {
    var phoneRe =/^(09|\+639)\d{9}$/g
    var digits = p;
    return phoneRe.test(digits);
}

$(document).ready(function() {
    
    $(".business_fields").keyup(function() {
        var $nonempty = $('.business_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("business_btn").disabled = false;
        }else{
            document.getElementById("business_btn").disabled = true;
        }
       
    }); 
    $(".business_fields").change(function() {
        var $nonempty = $('.business_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("business_btn").disabled = false;
        }else{
            document.getElementById("business_btn").disabled = true;
        }
    
    });

    $(".taxpayer_fields").keyup(function() {
        var $nonempty = $('.taxpayer_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("taxpayer_btn").disabled = false;
        }else{
            document.getElementById("taxpayer_btn").disabled = true;
        }
    }); 
    $(".taxpayer_fields").change(function() {
        var $nonempty = $('.taxpayer_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("taxpayer_btn").disabled = false;
        }else{
            document.getElementById("taxpayer_btn").disabled = true;
        }
    
    });

    $(".address_fields").keyup(function() {
        var $nonempty = $('.address_fields').filter(function() {
            return this.value == ''
        });

        var flag = 0
        if(document.getElementById("contact_number").value != ""){
            if(document.getElementById("contact_number").value.length >= 8){
                if(ValidatePhone(document.getElementById("contact_number").value) == false){
                    flag = 1
                    document.getElementById("phone_msg").innerHTML = " Invalid Format!";
                }else{
                    document.getElementById("phone_msg").innerHTML = "";
                    flag = 0
                }
            }else{
                document.getElementById("phone_msg").innerHTML = "";
                flag = 1
            }
        }else{
            document.getElementById("phone_msg").innerHTML = "";
            flag = 1
        }

        if($nonempty.length == 0 && flag == 0){
            document.getElementById("address_btn").disabled = false;
        }else{
            document.getElementById("address_btn").disabled = true;
        }
    }); 
    $(".address_fields").change(function() {
        var $nonempty = $('.address_fields').filter(function() {
            return this.value == ''
        });

        var flag = 0
        if(document.getElementById("contact_number").value != ""){
            if(document.getElementById("contact_number").value.length >= 8){
                if(ValidatePhone(document.getElementById("contact_number").value) == false){
                    flag = 1
                    document.getElementById("phone_msg").innerHTML = " Invalid Format!";
                }else{
                    document.getElementById("phone_msg").innerHTML = "";
                    flag = 0
                }
            }else{
                document.getElementById("phone_msg").innerHTML = "";
                flag = 1
            }
        }else{
            document.getElementById("phone_msg").innerHTML = "";
            flag = 1
        }

        if($nonempty.length == 0 && flag == 0){
            document.getElementById("address_btn").disabled = false;
        }else{
            document.getElementById("address_btn").disabled = true;
        }
    
    });

    $(".employees_fields").keyup(function() {
        var $nonempty = $('.employees_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("employees_btn").disabled = false;
        }else{
            document.getElementById("employees_btn").disabled = true;
        }
    }); 
    $(".employees_fields").change(function() {
        var $nonempty = $('.employees_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("employees_btn").disabled = false;
        }else{
            document.getElementById("employees_btn").disabled = true;
        }
    });

    $(".machinery_fields").keyup(function() {
        var $nonempty = $('.machinery_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("machinery_btn").disabled = false;
        }else{
            document.getElementById("machinery_btn").disabled = true;
        }
    }); 
    $(".machinery_fields").change(function() {
        var $nonempty = $('.machinery_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("machinery_btn").disabled = false;
        }else{
            document.getElementById("machinery_btn").disabled = true;
        }
    
    });

    $(".business_place_fields").keyup(function() {
        var $nonempty = $('.business_place_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("business_place_btn").disabled = false;
        }else{
            document.getElementById("business_place_btn").disabled = true;
        }
    }); 
    $(".business_place_fields").change(function() {
        var $nonempty = $('.business_place_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("business_place_btn").disabled = false;
        }else{
            document.getElementById("business_place_btn").disabled = true;
        }
    
    });

    $(".establisment_fields").keyup(function() {
        var $nonempty = $('.establisment_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("establisment_btn").disabled = false;
        }else{
            document.getElementById("establisment_btn").disabled = true;
        }
    }); 
    $(".establisment_fields").change(function() {
        var $nonempty = $('.establisment_fields').filter(function() {
            return this.value == ''
        });
        if($nonempty.length == 0){
            document.getElementById("establisment_btn").disabled = false;
        }else{
            document.getElementById("establisment_btn").disabled = true;
        }
    
    });
}); 