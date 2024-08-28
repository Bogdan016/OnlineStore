import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/common/country';
import { County } from 'src/app/common/county';
import { FormService } from 'src/app/services/checkoutform.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup!: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;
   
  creditCardMonths: number[] = [];
  creditCardYears: number[] = [];

  countries: Country[] = [];

  shippingAddressCounties: County[] = [];
  billingAddressCounties: County[] = [];

  constructor(private formBuilder: FormBuilder, private form: FormService) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
      }),

      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        county: [''],
        country: [''],
        zipCode: ['']
      }),

      billingAddress: this.formBuilder.group({ 
        street: [''],
        city: [''],
        county: [''],
        country: [''],
        zipCode: ['']
      }),  

      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      }),  
    });

  
  const startMonth: number = new Date().getMonth() + 1;
  console.log("startMonth: " + startMonth);

  this.form.getCreditCardMonths(startMonth).subscribe(
  data => {
    console.log("Retrieved credit card months: " + JSON.stringify(data));
    this.creditCardMonths = data;
  });

  const startYear: number = new Date().getMonth() + 1;
  console.log("startYear: " + startYear);

  this.form.getCreditCardYears().subscribe(
  data => {
    console.log("Retrieved credit card years: " + JSON.stringify(data));
    this.creditCardYears = data;
  });
  
  this.form.getCountries().subscribe(
    data => {
      console.log("Retrieved countries: " + JSON.stringify(data));
      this.countries = data;
    }
  );
  }

  get firstName() { return this.checkoutFormGroup.get('customer.firstName'); }
  get lastName() { return this.checkoutFormGroup.get('customer.lastName'); }
  get email() { return this.checkoutFormGroup.get('customer.email'); }

  copyShippingAddressToBillingAddress(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.checkoutFormGroup.get('billingAddress')?.setValue(this.checkoutFormGroup.get('shippingAddress')?.getRawValue());

      this.billingAddressCounties = this.shippingAddressCounties;

    } else {
      this.checkoutFormGroup.get('billingAddress')?.reset();

      this.billingAddressCounties = [];
    }
  }
  
  onSubmit() {
    console.log("Handling the submit button");
    const customerGroup = this.checkoutFormGroup.get('customer');
    if (customerGroup) {
      console.log(customerGroup.value);
    } else { 
      console.error('Customer group is not defined in the form group');
    }
  }

  handleMonthsAndYears() {
    
    const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
    
    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = Number(creditCardFormGroup?.value.expirationYear);

    let startMonth: number;

    if(currentYear === selectedYear){
      startMonth = new Date().getMonth() + 1;
    }
    else{
      startMonth = 1;
    }

    this.form.getCreditCardMonths(startMonth).subscribe(
      data => {
        console.log("Retrieve credit card months: " + JSON.stringify(data));
        this.creditCardMonths = data;
      }
    )
  }

  getCounties(formGroupName: string) {

    const formGroup = this.checkoutFormGroup.get(formGroupName);
    
    const countryCode = formGroup?.value.country.code;
    const countryName = formGroup?.value.country.name;

    console.log(`{formGroupName} country code: ${countryCode}`);
    console.log(`{formGroupName} country name: ${countryName}`);

    this.form.getCounties(countryCode).subscribe(
      data => {
        if(formGroupName === 'shippingAddress') {
          this.shippingAddressCounties = data;
        }
        else {
          this.billingAddressCounties = data;
        }

        formGroup?.get('county')?.setValue(data[0]);
      }
    );
  }
 
}
