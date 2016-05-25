
(
	([02468][048]|[13579][26])([02468][048]|[13579][26])-                   //leap year
	(                                                                      //month-day for leap year
		(0[13578]|1[02])-(0[1-9]|[12]\d|3[01])|                             //for months with 31 days
		(0[469]|11)-(0[1-9]|[12]\d|30)|                                    //for months with 30
		(02)-(0[1-9]|1\d|2[0-9])                                          //for february when february has 28 days
	)|
	(\d{4})-                                                           //normal year
	(                                                                 //the same for the months with 30 and 31 days, except february
		(0[13578]|1[02])-(0[1-9]|[12]\d|3[01])|
		(0[469]|11)-(0[1-9]|[12]\d|30)|
		(02)-(0[1-9]|1\d|2[0-8])                                       //for february when february has 28 days
	)
)
T([0-1]\d|2[0-3]):                                               //hours
([0-5]\d):                                                      //minutes
([0-5]\d)Z                                                     //seconds
