import { LightningElement , track } from 'lwc';
//Importing reusable LWC Component as Javascript utility
import {getUrlParameter } from 'c/JSUtility';

export default class DemoWrapperLWC extends LightningElement {
    connectedCallback() {
      let param1 = getUrlParameter('param1');
      console.log('Found Parameter value for param1'+param1);
    }

}