import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateANewAccount extends LightningElement {


    submitHandler(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        //console.log( 'Fields are -->'+ JSON.stringify( fields ));
        this.template.querySelector('lightning-record-edit-form').submit(fields);
        
    }

    successHandler(event) {
        

       

            const evt = new ShowToastEvent({
                title: 'Toast message',
                message: 'Toast Message',
                variant: 'success',
                mode: 'dismissable'
            });
            this.dispatchEvent(evt);
            window.history.back();
            //window.history.reload();

    }

}
