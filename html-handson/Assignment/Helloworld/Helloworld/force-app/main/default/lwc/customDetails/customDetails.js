import { LightningElement , api, wire} from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';


export default class CustomDetails extends LightningElement {
    @api recordId;
     @wire(getRelatedListRecords, {
        parentRecordId: '0018X000037mM6BQAU',
        relatedListId: 'Opportunity',
        fields: ['Opportunity.StageName','Opportunity.Amount','Opportunity.CloseDate'],
        sortBy:['Opportunity.StageName']
    })
    relatedRecord;
}