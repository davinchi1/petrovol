//validation script

function validateForm(){

	var firstname = document.forms["calc_1"] ["first_name"].value;
			if (firstname==null|| firstname==""){
			alert ("Please fill in your first name");
			return false;
  }
  
  var lastname = document.forms["calc_1"] ["last_name"].value;
			if (lastname==null|| lastname==""){
			alert ("Please fill in your last name");
			return false;
  }

  var compnayname = document.forms["calc_1"] ["company_name"].value;
			if (compnayname==null|| compnayname==""){
			alert ("Please fill in your company name");
			return false;
  }
  
  var companyid = document.forms["calc_1"] ["company_id"].value;
			if (companyid==null|| companyid==""){
			alert ("Please fill in your company identification number");
			return false;
  }
  
  var stateparishprovince = document.forms["calc_1"] ["state_parish_province"].value;
			if (stateparishprovince==null|| stateparishprovince==""){
			alert ("Please fill in your state/parish/province");
			return false;
  }
  
  var email1 = document.forms["calc_1"] ["email"].value;
			if (email1==null|| email1==""){
			alert ("Please fill in your email");
			return false;
  }
  
    var tankerwagon = document.forms["calc_1"] ["tanker_wagon"].value;
			if (tankerwagon==null|| tankerwagon==""){
			alert ("Please fill in the tanker wagon identification number");
			return false;
  }
  var deliveryreceipt = document.forms["calc_1"] ["delivery_receipt"].value;
			if (deliveryreceipt==null|| deliveryreceipt==""){
			alert ("Please fill in your delivery receipt number");
			return false;
  }
  
}