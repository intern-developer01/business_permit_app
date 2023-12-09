


$(document).ready(function() {
    
    $(".business_fields").keyup(function() {
        var flag = 0
        var fields = document.getElementsByClassName("business_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        
        if(flag != 0){
            document.getElementById("business_btn").disabled = true;
        }else{
            document.getElementById("business_btn").disabled = false;
        }
    }); 
    $(".business_fields").change(function() {
        var flag = 0
        var fields = document.getElementsByClassName("business_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        if(flag != 0){
            document.getElementById("business_btn").disabled = true;
        }else{
            document.getElementById("business_btn").disabled = false;
        }
    
    });

    $(".taxpayer_fields").keyup(function() {
        var flag = 0
        var fields = document.getElementsByClassName("taxpayer_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        
        if(flag != 0){
            document.getElementById("taxpayer_btn").disabled = true;
        }else{
            document.getElementById("taxpayer_btn").disabled = false;
        }
    }); 
    $(".taxpayer_fields").change(function() {
        var flag = 0
        var fields = document.getElementsByClassName("taxpayer_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        if(flag != 0){
            document.getElementById("taxpayer_btn").disabled = true;
        }else{
            document.getElementById("taxpayer_btn").disabled = false;
        }
    
    });

    $(".address_fields").keyup(function() {
        var flag = 0
        var fields = document.getElementsByClassName("address_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        
        if(flag != 0){
            document.getElementById("address_btn").disabled = true;
        }else{
            document.getElementById("address_btn").disabled = false;
        }
    }); 
    $(".address_fields").change(function() {
        var flag = 0
        var fields = document.getElementsByClassName("address_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        if(flag != 0){
            document.getElementById("address_btn").disabled = true;
        }else{
            document.getElementById("address_btn").disabled = false;
        }
    
    });

    $(".employees_fields").keyup(function() {
        var flag = 0
        var fields = document.getElementsByClassName("employees_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        
        if(flag != 0){
            document.getElementById("employees_btn").disabled = true;
        }else{
            document.getElementById("employees_btn").disabled = false;
        }
    }); 
    $(".employees_fields").change(function() {
        var flag = 0
        var fields = document.getElementsByClassName("employees_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        if(flag != 0){
            document.getElementById("employees_btn").disabled = true;
        }else{
            document.getElementById("employees_btn").disabled = false;
        }
    
    });

    $(".machinery_fields").keyup(function() {
        var flag = 0
        var fields = document.getElementsByClassName("machinery_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        
        if(flag != 0){
            document.getElementById("machinery_btn").disabled = true;
        }else{
            document.getElementById("machinery_btn").disabled = false;
        }
    }); 
    $(".machinery_fields").change(function() {
        var flag = 0
        var fields = document.getElementsByClassName("machinery_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        if(flag != 0){
            document.getElementById("machinery_btn").disabled = true;
        }else{
            document.getElementById("machinery_btn").disabled = false;
        }
    
    });

    $(".business_place_fields").keyup(function() {
        var flag = 0
        var fields = document.getElementsByClassName("business_place_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        
        if(flag != 0){
            document.getElementById("business_place_btn").disabled = true;
        }else{
            document.getElementById("business_place_btn").disabled = false;
        }
    }); 
    $(".business_place_fields").change(function() {
        var flag = 0
        var fields = document.getElementsByClassName("business_place_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        if(flag != 0){
            document.getElementById("business_place_btn").disabled = true;
        }else{
            document.getElementById("business_place_btn").disabled = false;
        }
    
    });

    $(".establisment_fields").keyup(function() {
        var flag = 0
        var fields = document.getElementsByClassName("establisment_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        
        if(flag != 0){
            document.getElementById("establisment_btn").disabled = true;
        }else{
            document.getElementById("establisment_btn").disabled = false;
        }
    }); 
    $(".establisment_fields").change(function() {
        var flag = 0
        var fields = document.getElementsByClassName("establisment_fields")
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value == ""){
                flag = 1
                break;
            }
        }
        if(flag != 0){
            document.getElementById("establisment_btn").disabled = true;
        }else{
            document.getElementById("establisment_btn").disabled = false;
        }
    
    });
}); 