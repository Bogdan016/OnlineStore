import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup!: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;
  
  constructor(private formBuilder: FormBuilder) { }

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
        province: [''],
        country: [''],
        zipCode: ['']
      }),

      billingAddress: this.formBuilder.group({ 
        street: [''],
        city: [''],
        province: [''],
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
  }

  copyShippingAddressToBillingAddress(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.checkoutFormGroup.get('billingAddress')?.setValue(this.checkoutFormGroup.get('shippingAddress')?.getRawValue());
    } else {
      this.checkoutFormGroup.get('billingAddress')?.reset();
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

}
