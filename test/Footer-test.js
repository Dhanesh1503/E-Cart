/* Footer-test.js
 * Test Cases related to Footer section.
 * @Author: Dhanesh Pant
 * @Since: 9-Oct-2016  
 */

'use strict';

let assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
let React = require('react');
let skinDeep = require('skin-deep');
let ReactTestUtils = require('react-addons-test-utils');
import Footer from '../app/components/common/Footer'

describe('Footer related test cases :', function() {

  const appState={

     userName:'',
     userPassword:'',
     selectedBusinessUnit : {},
     newUserName:'',
     newUserEmail:'',
     newUserContact:'',
     newUserAddress:'',
     completeInfoOfCustomer:[],
     businessList : [
          {
            id : "clothing-accessories",
            name : "Clothing & Accessories",
          },
          {
            id : "beauty-health-gourmet",
            name : "Beauty, Health & Gourmet",
          },
          {
            id : "sports-fitness-outdoors",
            name : "Sports, Fitness & Outdoors",
          },
          {
            id : "handbags-Luggage",
            name : "Handbags & Luggage",
          },
          {
            id : "home-kitchen",
            name : "Home & Kitchen Appliances",
          }
      ]

  }

  var tree = skinDeep.shallowRender(<Footer {...this.props}/>);
  var instance = tree.getMountedInstance();
  
  it('Should contain a one footer :', function() {
     var footer=tree.everySubTree('footer');
     expect(footer.length).to.eql(1);
  });

  it('Should contain two span:', function() {
     var spanElements=tree.everySubTree('span');
     expect(spanElements.length).to.eql(2);
  });

  it('Should contain one copyright span:', function() {
     var copyrightSpan=tree.everySubTree('.copyright');
     expect(copyrightSpan.length).to.eql(1);
  });

});