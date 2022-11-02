import { LightningElement } from 'lwc';


export default class CreateANewAccount extends LightningElement {


    submitHandler(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        //console.log( 'Fields are -->'+ JSON.stringify( fields ));
        this.template.querySelector('lightning-record-edit-form').submit(fields);
        
    }

    successHandler(event) {
        window.history.back();

        window.history.reload();

        // const evt = new ShowToastEvent({
        //     title: 'Account Created!',
        //     message: 'Record ID: ' + event.detail.id,
        //     variant: 'success',
        // });
        
        // this.dispatchEvent(evt);
        
    }
}