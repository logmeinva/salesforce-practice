import { LightningElement , api, wire} from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
import { getRelatedListCount } from 'lightning/uiRelatedListApi';


export  class CustomDetails extends LightningElement {
    @api recordId;
     @wire(getRelatedListRecords, {
        parentRecordId: "0018X000037mM6BQAU",
        relatedListId: 'Opportunities',
        fields: ['Opportunity.StageName','Opportunity.Amount','Opportunity.CloseDate'],
        sortBy:['Opportunity.StageName']
    })
    // relatedRecord;
    listInfo( { error, data } ) {

        if ( data ) {
            console.log( 'Data is', JSON.stringify( data ) );
        }
        else {
            console.log( 'There is no Data' );
        }
    }
}


export default class GetRelatedListCount extends LightningElement {
    error;
    responseData;
    @api recordId;
    //Account's related contact list count
    @wire(getRelatedListCount, {
        parentRecordId: '$recordId',
        relatedListId: 'Contacts'
    })listInfo({ error, data }) {
        if (data) {
            //c/accountdetailsthis.responseData = data;
            this.responseData = undefined;

            console.log('Count is: '+JSON.stringify(data));
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.responseData = undefined;
            console.log('Invalid Count: ');

        }
    }
}